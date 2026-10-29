import { BaseModel } from '../BaseModel';
import { SpreadsheetMixin } from '../types/spreadsheet.mixin';

export class SpreadsheetMixinModel extends BaseModel<SpreadsheetMixin> {
  protected readonly model = 'spreadsheet.mixin';
}
