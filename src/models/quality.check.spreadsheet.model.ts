import { BaseModel } from '../BaseModel';
import { QualityCheckSpreadsheet } from '../types/quality.check.spreadsheet';

export class QualityCheckSpreadsheetModel extends BaseModel<QualityCheckSpreadsheet> {
  protected readonly model = 'quality.check.spreadsheet';
}
