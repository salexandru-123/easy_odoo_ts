export interface TResourceCalendar {
  active?: boolean;
  attendance_ids?: number[];
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  flexible_hours?: boolean;
  full_time_required_hours?: number;
  global_leave_ids?: number[];
  hours_per_day?: number;
  id?: number;
  leave_ids?: number[];
  name: string;
  two_weeks_calendar?: boolean;
  two_weeks_explanation?: string;
  tz: string;
  tz_offset?: string;
  write_date?: string;
  write_uid?: number | false;
}