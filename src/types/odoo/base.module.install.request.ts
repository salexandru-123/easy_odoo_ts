export interface TBaseModuleInstallRequest {
  body_html?: string;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  module_id: number | false;
  user_id: number | false;
  user_ids?: number[];
  write_date?: string;
  write_uid?: number | false;
}