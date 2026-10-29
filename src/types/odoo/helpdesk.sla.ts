export interface HelpdeskSla {
  active?: boolean;
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  description?: string;
  display_name?: string;
  exclude_stage_ids?: number[];
  id?: number;
  name: string;
  partner_ids?: number[];
  priority: string;
  stage_id?: number | false;
  tag_ids?: number[];
  team_id: number | false;
  ticket_count?: number;
  time: number;
  write_date?: string;
  write_uid?: number | false;
}