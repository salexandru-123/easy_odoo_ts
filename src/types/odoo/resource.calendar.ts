export interface ResourceCalendar {
  active?: boolean;
  associated_leaves_count?: number;
  attendance_ids?: number[];
  company_id?: number | false;
  contracts_count?: number;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  flexible_hours?: boolean;
  full_time_required_hours?: number;
  global_leave_ids?: number[];
  hours_per_day?: number;
  hours_per_week?: number;
  id?: number;
  is_fulltime?: boolean;
  leave_ids?: number[];
  name: string;
  two_weeks_calendar?: boolean;
  two_weeks_explanation?: string;
  tz: string;
  tz_offset?: string;
  work_time_rate?: number;
  write_date?: string;
  write_uid?: number | false;
}