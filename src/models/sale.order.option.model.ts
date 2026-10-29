import { BaseModel } from '../BaseModel';
import { SaleOrderOption } from '../types/sale.order.option';

export class SaleOrderOptionModel extends BaseModel<SaleOrderOption> {
  protected readonly model = 'sale.order.option';
}
