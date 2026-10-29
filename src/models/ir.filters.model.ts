import { BaseModel } from '../BaseModel';
import { IrFilters } from '../types/ir.filters';

export class IrFiltersModel extends BaseModel<IrFilters> {
  protected readonly model = 'ir.filters';
}
