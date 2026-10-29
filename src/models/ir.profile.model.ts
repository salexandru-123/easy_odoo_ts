import { BaseModel } from '../BaseModel';
import { IrProfile } from '../types/ir.profile';

export class IrProfileModel extends BaseModel<IrProfile> {
  protected readonly model = 'ir.profile';
}
