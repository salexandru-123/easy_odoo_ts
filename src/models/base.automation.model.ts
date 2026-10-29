import { BaseModel } from '../BaseModel';
import { BaseAutomation } from '../types/base.automation';

export class BaseAutomationModel extends BaseModel<BaseAutomation> {
  protected readonly model = 'base.automation';
}
