import { BaseModel } from '../BaseModel';
import { DigestTip } from '../types/digest.tip';

export class DigestTipModel extends BaseModel<DigestTip> {
  protected readonly model = 'digest.tip';
}
