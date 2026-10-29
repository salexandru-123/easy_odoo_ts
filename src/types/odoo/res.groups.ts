export interface ResGroups {
  api_key_duration?: number;
  category_id?: number | false;
  color?: number;
  comment?: string;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  full_name?: string;
  id?: number;
  implied_ids?: number[];
  menu_access?: number[];
  model_access?: number[];
  name: string;
  rule_groups?: number[];
  share?: boolean;
  trans_implied_ids?: number[];
  users?: number[];
  view_access?: number[];
  write_date?: string;
  write_uid?: number | false;
}