import { BaseModel } from '../BaseModel';
import { ResPartner } from '../types/res.partner';

export class ResPartnerModel extends BaseModel<ResPartner> {
  protected readonly model = 'res.partner';
}
