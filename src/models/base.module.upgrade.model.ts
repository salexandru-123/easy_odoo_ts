import { BaseModel } from '../BaseModel';
import { BaseModuleUpgrade } from '../types/base.module.upgrade';

export class BaseModuleUpgradeModel extends BaseModel<BaseModuleUpgrade> {
  protected readonly model = 'base.module.upgrade';
}
