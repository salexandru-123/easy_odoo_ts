export interface TAccountAnalyticPlan {
  account_count?: number;
  account_ids?: number[];
  all_account_count?: number;
  applicability_ids?: number[];
  children_count?: number;
  children_ids?: number[];
  color?: number;
  complete_name?: string;
  create_date?: string;
  create_uid?: number | false;
  default_applicability?: string;
  description?: string;
  display_name?: string;
  id?: number;
  name: string;
  parent_id?: number | false;
  parent_path?: string;
  root_id?: number | false;
  sequence?: number;
  write_date?: string;
  write_uid?: number | false;
}