import { BaseModel } from '../BaseModel';
import { BarcodeNomenclature } from '../types/barcode.nomenclature';

export class BarcodeNomenclatureModel extends BaseModel<BarcodeNomenclature> {
  protected readonly model = 'barcode.nomenclature';
}
