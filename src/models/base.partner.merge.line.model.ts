import { BaseModel } from '../BaseModel';
import { BasePartnerMergeLine } from '../types/base.partner.merge.line';

export class BasePartnerMergeLineModel extends BaseModel<BasePartnerMergeLine> {
  protected readonly model = 'base.partner.merge.line';
}
