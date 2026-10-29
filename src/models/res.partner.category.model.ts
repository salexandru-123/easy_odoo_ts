import { BaseModel } from '../BaseModel';
import { ResPartnerCategory } from '../types/res.partner.category';

export class ResPartnerCategoryModel extends BaseModel<ResPartnerCategory> {
  protected readonly model = 'res.partner.category';
}
