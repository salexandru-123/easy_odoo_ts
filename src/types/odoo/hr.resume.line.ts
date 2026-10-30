export interface THrResumeLine {
  create_date?: string;
  create_uid?: number | false;
  date_end?: string;
  date_start: string;
  description?: string;
  display_name?: string;
  display_type?: string;
  employee_id: number | false;
  id?: number;
  line_type_id?: number | false;
  name: string;
  write_date?: string;
  write_uid?: number | false;
}