import { BaseModel } from '../BaseModel';
import { HrLeaveReport } from '../types/hr.leave.report';

export class HrLeaveReportModel extends BaseModel<HrLeaveReport> {
  protected readonly model = 'hr.leave.report';
}
