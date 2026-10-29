import { BaseModel } from '../BaseModel';
import { SaleOrder } from '../types/sale.order';

export class SaleOrderModel extends BaseModel<SaleOrder> {
  protected readonly model = 'sale.order';
}
