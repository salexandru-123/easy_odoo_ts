import { BaseModel } from '../BaseModel';
import { SpreadsheetRevision } from '../types/spreadsheet.revision';

export class SpreadsheetRevisionModel extends BaseModel<SpreadsheetRevision> {
  protected readonly model = 'spreadsheet.revision';
}
