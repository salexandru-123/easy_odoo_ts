export interface TProjectTaskCreateTimesheet {
  create_date?: string;
  create_uid?: number | false;
  description?: string;
  display_name?: string;
  id?: number;
  task_id: number | false;
  time_spent?: number;
  write_date?: string;
  write_uid?: number | false;
}