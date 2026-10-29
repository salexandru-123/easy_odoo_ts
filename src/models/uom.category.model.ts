import { BaseModel } from '../BaseModel';
import { UomCategory } from '../types/uom.category';

export class UomCategoryModel extends BaseModel<UomCategory> {
  protected readonly model = 'uom.category';
}
