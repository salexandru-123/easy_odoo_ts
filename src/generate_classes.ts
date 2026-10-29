import * as fs from 'fs';
import * as path from 'path';

const INTERFACES_DIR = path.join(__dirname, './types/odoo');
const OUTPUT_DIR = path.join(__dirname, './models');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Helper to convert snake_case or camelCase to PascalCase (e.g., stock_lot -> StockLot)
function toPascalCase(str: string): string {
  return str
    .replace(/['-_]([.a-z])/g, (_, g) => g.toUpperCase())
    .replace(/^[a-z]/, (match) => match.toUpperCase())
    .replace(/\.ts$/, '');
}

// Helper to convert PascalCase or camelCase to dot.notation for Odoo (e.g., StockLot -> stock.lot)
function toOdooModelName(str: string): string {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1.$2')
    .toLowerCase()
    .replace(/\.ts$/, '');
}

function generateClasses() {
  const files = fs.readdirSync(INTERFACES_DIR);

  let indexFileContent = '';

  for (const file of files) {
    if (!file.endsWith('.ts') && !file.endsWith('.d.ts')) continue;

    const fileNameWithoutExt = path.basename(file, path.extname(file));
    const interfaceName = toPascalCase(fileNameWithoutExt); // e.g., StockLot
    const modelName = toOdooModelName(fileNameWithoutExt); // e.g., stock.lot
    const className = `${interfaceName}Model`;

    // Generate the TypeScript code for the class file
    const classCode = `import { BaseModel } from '../BaseModel';
import { ${interfaceName} } from '../types/${fileNameWithoutExt}';

export class ${className} extends BaseModel<${interfaceName}> {
  protected readonly model = '${modelName}';
}
`;

    // Write individual model file
    const outputFilePath = path.join(OUTPUT_DIR, `${fileNameWithoutExt}.model.ts`);
    fs.writeFileSync(outputFilePath, classCode);

    // Add to export index
    indexFileContent += `export * from './${fileNameWithoutExt}.model';\n`;

    console.log(`Generated: ${className} for model '${modelName}'`);
  }

  // Write an index.ts file so developers can import everything easily
  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.ts'), indexFileContent);
  console.log('\nSuccessfully generated all Odoo model classes!');
}

generateClasses();
