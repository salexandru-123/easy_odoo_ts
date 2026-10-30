export interface TIrModel {
  abstract?: boolean;
  access_ids?: number[];
  count?: number;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  field_id: number[];
  hide_merge_action?: boolean;
  id?: number;
  info?: string;
  inherited_model_ids?: number[];
  is_mail_activity?: boolean;
  is_mail_blacklist?: boolean;
  is_mail_thread?: boolean;
  is_mail_thread_sms?: boolean;
  is_merge_enabled?: boolean;
  model: string;
  modules?: string;
  name: string;
  order: string;
  ref_merge_ir_act_server_id?: number | false;
  rule_ids?: number[];
  state?: string;
  transient?: boolean;
  view_ids?: number[];
  write_date?: string;
  write_uid?: number | false;
}