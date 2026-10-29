import { BaseModel } from '../BaseModel';
import { MrpProductForecast } from '../types/mrp.product.forecast';

export class MrpProductForecastModel extends BaseModel<MrpProductForecast> {
  protected readonly model = 'mrp.product.forecast';
}
