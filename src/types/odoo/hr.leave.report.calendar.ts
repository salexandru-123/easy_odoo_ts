export interface HrLeaveReportCalendar {
  company_id?: number | false;
  department_id?: number | false;
  description?: string;
  display_name?: string;
  duration?: number;
  employee_id?: number | false;
  holiday_status_id?: number | false;
  id?: number;
  is_absent?: boolean;
  is_hatched?: boolean;
  is_manager?: boolean;
  is_striked?: boolean;
  job_id?: number | false;
  leave_id?: number | false;
  leave_manager_id?: number | false;
  name?: string;
  start_datetime?: string;
  state?: string;
  stop_datetime?: string;
  tz?: string;
}