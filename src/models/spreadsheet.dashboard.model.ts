import { BaseModel } from '../BaseModel';
import { SpreadsheetDashboard } from '../types/spreadsheet.dashboard';

export class SpreadsheetDashboardModel extends BaseModel<SpreadsheetDashboard> {
  protected readonly model = 'spreadsheet.dashboard';
}
