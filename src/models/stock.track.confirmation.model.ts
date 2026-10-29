import { BaseModel } from '../BaseModel';
import { StockTrackConfirmation } from '../types/stock.track.confirmation';

export class StockTrackConfirmationModel extends BaseModel<StockTrackConfirmation> {
  protected readonly model = 'stock.track.confirmation';
}
