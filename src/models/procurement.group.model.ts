import { BaseModel } from '../BaseModel';
import { ProcurementGroup } from '../types/procurement.group';

export class ProcurementGroupModel extends BaseModel<ProcurementGroup> {
  protected readonly model = 'procurement.group';
}
