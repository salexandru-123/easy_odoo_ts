import * as fs from 'fs';
import { readFile } from 'fs/promises';
import * as path from 'path';

const INTERFACES_DIR = path.join(__dirname, '..', '/types/odoo');
const OUTPUT_DIR = path.join(__dirname, '..', '/models');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Helper to convert PascalCase or camelCase to dot.notation for Odoo (e.g., StockLot -> stock.lot)
function toOdooModelName(str: string): string {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1.$2')
    .toLowerCase()
    .replace(/\.ts$/, '');
}

async function generateClasses() {
  const files = fs.readdirSync(INTERFACES_DIR);

  let indexFileContent = '';
  let _imports = '';
  let classesExports = '';
  for (const file of files) {
    const filePath = path.join(INTERFACES_DIR, file);
    if (!file.endsWith('.ts') && !file.endsWith('.d.ts')) continue;
    const fileContent = (await readFile(filePath)).toString();

    const fileNameWithoutExt = fileContent.match(/(?<=interface\s+).*?(?=\s+{)/gs)?.[0] || ''; //path.basename(file, path.extname(file));
    // extract interface name from the file directly (first row between interface and {)
    const interfaceName = fileNameWithoutExt;
    const modelInterfaceName = interfaceName.startsWith('T') ? interfaceName.slice(1) : interfaceName;
    const modelName = toOdooModelName(modelInterfaceName);
    if (interfaceName.includes('FleetVehicleModel')) {
      console.log('Here');
    }
    const className = `${modelInterfaceName}Model`;
    _imports += `import { ${interfaceName} } from '../types/odoo/${file.replace('.ts', '')}';\n`;
    classesExports += `
export class ${className} extends BaseOdooModel<${interfaceName}> {
  protected readonly model = '${modelName}';
}\n`;

    console.log(`Generated: ${className} for model '${modelName}'`);
  }

  // Add to export index
  indexFileContent += `export * from './odoo_models';\n`;
  // Generate the TypeScript code for the class file
  const classCode = `import { BaseOdooModel } from './odoo';
    ${_imports}
    ${classesExports}`;

  // Write individual model file
  const outputFilePath = path.join(OUTPUT_DIR, `odoo_models.ts`);
  fs.writeFileSync(outputFilePath, classCode);

  // Write an index.ts file so developers can import everything easily
  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.ts'), indexFileContent);
  console.log('\nSuccessfully generated all Odoo model classes!');
}

generateClasses();
