export interface TData_mergeModel {
  active?: boolean;
  create_date?: string;
  create_threshold?: number;
  create_uid?: number | false;
  custom_merge_method?: boolean;
  display_name?: string;
  domain?: string;
  id?: number;
  is_contextual_merge_action?: boolean;
  last_notification?: string;
  merge_mode?: string;
  merge_threshold?: number;
  mix_by_company?: boolean;
  name: string;
  notify_frequency?: number;
  notify_frequency_period?: string;
  notify_user_ids?: number[];
  records_to_merge_count?: number;
  removal_mode?: string;
  res_model_id: number | false;
  res_model_name?: string;
  rule_ids?: number[];
  write_date?: string;
  write_uid?: number | false;
}
