export interface THrTimesheetAttendanceReport {
  attendance_cost?: number;
  company_id?: number | false;
  cost_difference?: number;
  date?: string;
  display_name?: string;
  employee_id?: number | false;
  id?: number;
  timesheets_cost?: number;
  total_attendance?: number;
  total_difference?: number;
  total_timesheet?: number;
}