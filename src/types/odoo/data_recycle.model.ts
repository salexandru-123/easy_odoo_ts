export interface TData_recycleModel {
  active?: boolean;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  domain?: string;
  id?: number;
  include_archived?: boolean;
  last_notification?: string;
  name: string;
  notify_frequency?: number;
  notify_frequency_period?: string;
  notify_user_ids?: number[];
  records_to_recycle_count?: number;
  recycle_action: string;
  recycle_mode: string;
  recycle_record_ids?: number[];
  res_model_id: number | false;
  res_model_name?: string;
  time_field_delta?: number;
  time_field_delta_unit?: string;
  time_field_id?: number | false;
  write_date?: string;
  write_uid?: number | false;
}