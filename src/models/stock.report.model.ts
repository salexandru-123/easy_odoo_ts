import { BaseModel } from '../BaseModel';
import { StockReport } from '../types/stock.report';

export class StockReportModel extends BaseModel<StockReport> {
  protected readonly model = 'stock.report';
}
