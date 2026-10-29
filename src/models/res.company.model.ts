import { BaseModel } from '../BaseModel';
import { ResCompany } from '../types/res.company';

export class ResCompanyModel extends BaseModel<ResCompany> {
  protected readonly model = 'res.company';
}
