export interface THelpdeskStage {
  active?: boolean;
  create_date?: string;
  create_uid?: number | false;
  description?: string;
  display_name?: string;
  fold?: boolean;
  id?: number;
  legend_blocked: string;
  legend_done: string;
  legend_normal: string;
  name: string;
  sequence?: number;
  sms_template_id?: number | false;
  team_ids: number[];
  template_id?: number | false;
  ticket_count?: number;
  write_date?: string;
  write_uid?: number | false;
}
