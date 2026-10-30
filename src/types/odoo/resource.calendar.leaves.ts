export interface TResourceCalendarLeaves {
  calendar_id?: number | false;
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  date_from: string;
  date_to: string;
  display_name?: string;
  holiday_id?: number | false;
  id?: number;
  name?: string;
  resource_id?: number | false;
  time_type?: string;
  timesheet_ids?: number[];
  work_entry_type_id?: number | false;
  write_date?: string;
  write_uid?: number | false;
}