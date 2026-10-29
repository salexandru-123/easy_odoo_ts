import { BaseModel } from '../BaseModel';
import { SaleOrderTemplate } from '../types/sale.order.template';

export class SaleOrderTemplateModel extends BaseModel<SaleOrderTemplate> {
  protected readonly model = 'sale.order.template';
}
