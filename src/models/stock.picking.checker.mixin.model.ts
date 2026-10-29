import { BaseModel } from '../BaseModel';
import { StockPickingCheckerMixin } from '../types/stock.picking.checker.mixin';

export class StockPickingCheckerMixinModel extends BaseModel<StockPickingCheckerMixin> {
  protected readonly model = 'stock.picking.checker.mixin';
}
