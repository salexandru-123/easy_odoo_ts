import { BaseModel } from '../BaseModel';
import { SaleEdiCommon } from '../types/sale.edi.common';

export class SaleEdiCommonModel extends BaseModel<SaleEdiCommon> {
  protected readonly model = 'sale.edi.common';
}
