export interface TMaintenanceTeam {
  active?: boolean;
  color?: number;
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  equipment_ids?: number[];
  id?: number;
  member_ids?: number[];
  name: string;
  request_ids?: number[];
  todo_request_count?: number;
  todo_request_count_block?: number;
  todo_request_count_date?: number;
  todo_request_count_high_priority?: number;
  todo_request_count_unscheduled?: number;
  todo_request_ids?: number[];
  write_date?: string;
  write_uid?: number | false;
}