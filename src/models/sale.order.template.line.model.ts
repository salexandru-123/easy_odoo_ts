import { BaseModel } from '../BaseModel';
import { SaleOrderTemplateLine } from '../types/sale.order.template.line';

export class SaleOrderTemplateLineModel extends BaseModel<SaleOrderTemplateLine> {
  protected readonly model = 'sale.order.template.line';
}
