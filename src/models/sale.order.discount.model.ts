import { BaseModel } from '../BaseModel';
import { SaleOrderDiscount } from '../types/sale.order.discount';

export class SaleOrderDiscountModel extends BaseModel<SaleOrderDiscount> {
  protected readonly model = 'sale.order.discount';
}
