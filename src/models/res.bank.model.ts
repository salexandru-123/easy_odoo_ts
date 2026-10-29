import { BaseModel } from '../BaseModel';
import { ResBank } from '../types/res.bank';

export class ResBankModel extends BaseModel<ResBank> {
  protected readonly model = 'res.bank';
}
