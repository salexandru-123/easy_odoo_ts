export interface HelpdeskSlaStatus {
  color?: number;
  create_date?: string;
  create_uid?: number | false;
  deadline?: string;
  display_name?: string;
  exceeded_hours?: number;
  id?: number;
  reached_datetime?: string;
  sla_id: number | false;
  sla_stage_id?: number | false;
  status?: string;
  ticket_id: number | false;
  write_date?: string;
  write_uid?: number | false;
}