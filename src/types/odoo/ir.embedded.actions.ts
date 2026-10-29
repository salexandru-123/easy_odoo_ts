export interface IrEmbeddedActions {
  action_id?: number | false;
  context?: string;
  create_date?: string;
  create_uid?: number | false;
  default_view_mode?: string;
  display_name?: string;
  domain?: string;
  filter_ids?: number[];
  groups_ids?: number[];
  id?: number;
  is_deletable?: boolean;
  is_visible?: boolean;
  name?: string;
  parent_action_id: number | false;
  parent_res_id?: number;
  parent_res_model: string;
  python_method?: string;
  sequence?: number;
  user_id?: number | false;
  write_date?: string;
  write_uid?: number | false;
}