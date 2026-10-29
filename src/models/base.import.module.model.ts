import { BaseModel } from '../BaseModel';
import { BaseImportModule } from '../types/base.import.module';

export class BaseImportModuleModel extends BaseModel<BaseImportModule> {
  protected readonly model = 'base.import.module';
}
