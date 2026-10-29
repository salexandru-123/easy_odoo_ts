import { BaseModel } from '../BaseModel';
import { BaseModuleInstallRequest } from '../types/base.module.install.request';

export class BaseModuleInstallRequestModel extends BaseModel<BaseModuleInstallRequest> {
  protected readonly model = 'base.module.install.request';
}
