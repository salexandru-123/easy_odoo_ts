export interface TData_cleaningRecord {
  action?: string;
  active?: boolean;
  cleaning_model_id?: number | false;
  company_id?: number | false;
  country_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  current_value?: string;
  display_name?: string;
  field_id?: number | false;
  field_name?: string;
  id?: number;
  name?: string;
  res_id?: number;
  res_model_id?: number | false;
  res_model_name?: string;
  rule_ids: number[];
  suggested_value?: string;
  suggested_value_display?: string;
  write_date?: string;
  write_uid?: number | false;
}
