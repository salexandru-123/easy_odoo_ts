import { BaseModel } from '../BaseModel';
import { SaleOrderLine } from '../types/sale.order.line';

export class SaleOrderLineModel extends BaseModel<SaleOrderLine> {
  protected readonly model = 'sale.order.line';
}
