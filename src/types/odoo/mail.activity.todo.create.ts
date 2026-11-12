export interface TMailActivityTodoCreate {
  create_date?: string;
  create_uid?: number | false;
  date_deadline: string;
  display_name?: string;
  id?: number;
  note?: string;
  summary?: string;
  user_id: number | false;
  write_date?: string;
  write_uid?: number | false;
}
