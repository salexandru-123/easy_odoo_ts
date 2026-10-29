import { BaseModel } from '../BaseModel';
import { StockRulesReport } from '../types/stock.rules.report';

export class StockRulesReportModel extends BaseModel<StockRulesReport> {
  protected readonly model = 'stock.rules.report';
}
