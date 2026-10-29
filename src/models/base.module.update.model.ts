import { BaseModel } from '../BaseModel';
import { BaseModuleUpdate } from '../types/base.module.update';

export class BaseModuleUpdateModel extends BaseModel<BaseModuleUpdate> {
  protected readonly model = 'base.module.update';
}
