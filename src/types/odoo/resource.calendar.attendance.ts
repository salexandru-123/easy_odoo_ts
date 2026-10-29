export interface ResourceCalendarAttendance {
  calendar_id: number | false;
  create_date?: string;
  create_uid?: number | false;
  date_from?: string;
  date_to?: string;
  day_period: string;
  dayofweek: string;
  display_name?: string;
  display_type?: string;
  duration_days?: number;
  duration_hours?: number;
  hour_from: number;
  hour_to: number;
  id?: number;
  name: string;
  resource_id?: number | false;
  sequence?: number;
  two_weeks_calendar?: boolean;
  week_type?: string;
  work_entry_type_id?: number | false;
  write_date?: string;
  write_uid?: number | false;
}