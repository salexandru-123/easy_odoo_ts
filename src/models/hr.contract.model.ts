import { BaseModel } from '../BaseModel';
import { HrContract } from '../types/hr.contract';

export class HrContractModel extends BaseModel<HrContract> {
  protected readonly model = 'hr.contract';
}
