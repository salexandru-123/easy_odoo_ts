import { BaseModel } from '../BaseModel';
import { StockTrackLine } from '../types/stock.track.line';

export class StockTrackLineModel extends BaseModel<StockTrackLine> {
  protected readonly model = 'stock.track.line';
}
