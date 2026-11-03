"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const promises_1 = require("fs/promises");
const path = __importStar(require("path"));
const INTERFACES_DIR = path.join(__dirname, '..', '/types/odoo');
const OUTPUT_DIR = path.join(__dirname, '..', '/models');
// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}
// Helper to convert PascalCase or camelCase to dot.notation for Odoo (e.g., StockLot -> stock.lot)
function toOdooModelName(str) {
    return str
        .replace(/([a-z0-9])([A-Z])/g, '$1.$2')
        .toLowerCase()
        .replace(/\.ts$/, '');
}
async function generateClasses() {
    var _a;
    const files = fs.readdirSync(INTERFACES_DIR);
    let indexFileContent = '';
    let _imports = '';
    let classesExports = '';
    for (const file of files) {
        const filePath = path.join(INTERFACES_DIR, file);
        if (!file.endsWith('.ts') && !file.endsWith('.d.ts'))
            continue;
        const fileContent = (await (0, promises_1.readFile)(filePath)).toString();
        const fileNameWithoutExt = ((_a = fileContent.match(/(?<=interface\s+).*?(?=\s+{)/gs)) === null || _a === void 0 ? void 0 : _a[0]) || ''; //path.basename(file, path.extname(file));
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
