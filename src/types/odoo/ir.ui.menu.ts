export interface TIrUiMenu {
  action?: unknown;
  active?: boolean;
  child_id?: number[];
  complete_name?: string;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  groups_id?: number[];
  id?: number;
  is_studio_configuration?: boolean;
  name: string;
  parent_id?: number | false;
  parent_path?: string;
  sequence?: number;
  web_icon?: string;
  web_icon_data?: string | false;
  write_date?: string;
  write_uid?: number | false;
}