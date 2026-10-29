import { BaseModel } from '../BaseModel';
import { IrAsset } from '../types/ir.asset';

export class IrAssetModel extends BaseModel<IrAsset> {
  protected readonly model = 'ir.asset';
}
