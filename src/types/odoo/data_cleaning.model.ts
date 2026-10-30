export interface TData_cleaningModel {
  active?: boolean;
  cleaning_mode: string;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  last_notification?: string;
  name: string;
  notify_frequency?: number;
  notify_frequency_period?: string;
  notify_user_ids?: number[];
  records_to_clean_count?: number;
  res_model_id: number | false;
  res_model_name?: string;
  rule_ids?: number[];
  write_date?: string;
  write_uid?: number | false;
}