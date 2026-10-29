import { BaseModel } from '../BaseModel';
import { BaseImportMapping } from '../types/base_import.mapping';

export class BaseImportMappingModel extends BaseModel<BaseImportMapping> {
  protected readonly model = 'base_import.mapping';
}
