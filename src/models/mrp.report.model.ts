import { BaseModel } from '../BaseModel';
import { MrpReport } from '../types/mrp.report';

export class MrpReportModel extends BaseModel<MrpReport> {
  protected readonly model = 'mrp.report';
}
