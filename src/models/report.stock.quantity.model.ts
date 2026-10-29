import { BaseModel } from '../BaseModel';
import { ReportStockQuantity } from '../types/report.stock.quantity';

export class ReportStockQuantityModel extends BaseModel<ReportStockQuantity> {
  protected readonly model = 'report.stock.quantity';
}
