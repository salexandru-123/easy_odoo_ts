import { BaseModel } from '../BaseModel';
import { StockLotReport } from '../types/stock.lot.report';

export class StockLotReportModel extends BaseModel<StockLotReport> {
  protected readonly model = 'stock.lot.report';
}
