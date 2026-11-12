export interface THrRuleParameter {
  code: string;
  country_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  description?: string;
  display_name?: string;
  id?: number;
  name: string;
  parameter_version_ids?: number[];
  write_date?: string;
  write_uid?: number | false;
}
