import { BaseModel } from '../BaseModel';
import { ResCountry } from '../types/res.country';

export class ResCountryModel extends BaseModel<ResCountry> {
  protected readonly model = 'res.country';
}
