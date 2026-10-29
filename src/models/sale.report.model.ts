import { BaseModel } from '../BaseModel';
import { SaleReport } from '../types/sale.report';

export class SaleReportModel extends BaseModel<SaleReport> {
  protected readonly model = 'sale.report';
}
