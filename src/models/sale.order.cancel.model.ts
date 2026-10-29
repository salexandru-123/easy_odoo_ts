import { BaseModel } from '../BaseModel';
import { SaleOrderCancel } from '../types/sale.order.cancel';

export class SaleOrderCancelModel extends BaseModel<SaleOrderCancel> {
  protected readonly model = 'sale.order.cancel';
}
