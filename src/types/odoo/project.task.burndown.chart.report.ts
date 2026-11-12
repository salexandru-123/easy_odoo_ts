export interface TProjectTaskBurndownChartReport {
  allocated_hours?: number;
  date?: string;
  date_assign?: string;
  date_deadline?: string;
  date_last_stage_update?: string;
  is_closed?: string;
  milestone_id?: number | false;
  partner_id?: number | false;
  project_id?: number | false;
  stage_id?: number | false;
  state?: string;
  tag_ids?: number[];
  user_ids?: number[];
}
