export interface TProjectTaskRecurrence {
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  repeat_interval?: number;
  repeat_type?: string;
  repeat_unit?: string;
  repeat_until?: string;
  task_ids?: number[];
  write_date?: string;
  write_uid?: number | false;
}