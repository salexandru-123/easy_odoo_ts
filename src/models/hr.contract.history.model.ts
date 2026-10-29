import { BaseModel } from '../BaseModel';
import { HrContractHistory } from '../types/hr.contract.history';

export class HrContractHistoryModel extends BaseModel<HrContractHistory> {
  protected readonly model = 'hr.contract.history';
}
