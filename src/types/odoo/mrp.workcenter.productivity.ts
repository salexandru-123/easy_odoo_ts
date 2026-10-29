export interface MrpWorkcenterProductivity {
  account_move_line_id?: number | false;
  company_id: number | false;
  create_date?: string;
  create_uid?: number | false;
  currency_id?: number | false;
  date_end?: string;
  date_start: string;
  description?: string;
  display_name?: string;
  duration?: number;
  employee_cost?: number;
  employee_id?: number | false;
  id?: number;
  loss_id: number | false;
  loss_type?: string;
  production_id?: number | false;
  total_cost?: number;
  user_id?: number | false;
  workcenter_id: number | false;
  workorder_id?: number | false;
  write_date?: string;
  write_uid?: number | false;
}