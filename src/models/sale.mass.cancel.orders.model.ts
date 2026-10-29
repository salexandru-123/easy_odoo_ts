import { BaseModel } from '../BaseModel';
import { SaleMassCancelOrders } from '../types/sale.mass.cancel.orders';

export class SaleMassCancelOrdersModel extends BaseModel<SaleMassCancelOrders> {
  protected readonly model = 'sale.mass.cancel.orders';
}
