import { BaseModel } from '../BaseModel';
import { HrTimesheetAttendanceReport } from '../types/hr.timesheet.attendance.report';

export class HrTimesheetAttendanceReportModel extends BaseModel<HrTimesheetAttendanceReport> {
  protected readonly model = 'hr.timesheet.attendance.report';
}
