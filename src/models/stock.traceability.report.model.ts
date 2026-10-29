import { BaseModel } from '../BaseModel';
import { StockTraceabilityReport } from '../types/stock.traceability.report';

export class StockTraceabilityReportModel extends BaseModel<StockTraceabilityReport> {
  protected readonly model = 'stock.traceability.report';
}
