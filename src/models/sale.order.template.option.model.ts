import { BaseModel } from '../BaseModel';
import { SaleOrderTemplateOption } from '../types/sale.order.template.option';

export class SaleOrderTemplateOptionModel extends BaseModel<SaleOrderTemplateOption> {
  protected readonly model = 'sale.order.template.option';
}
