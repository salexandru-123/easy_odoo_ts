import { BaseModel } from '../BaseModel';
import { BarcodesBarcodeEventsMixin } from '../types/barcodes.barcode_events_mixin';

export class BarcodesBarcodeEventsMixinModel extends BaseModel<BarcodesBarcodeEventsMixin> {
  protected readonly model = 'barcodes.barcode_events_mixin';
}
