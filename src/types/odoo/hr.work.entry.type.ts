export interface THrWorkEntryType {
  active?: boolean;
  code: string;
  color?: number;
  country_code?: string;
  country_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  current_companies_country_codes?: string;
  display_name?: string;
  external_code?: string;
  id?: number;
  is_leave?: boolean;
  is_unforeseen?: boolean;
  leave_type_ids?: number[];
  name: string;
  round_days: string;
  round_days_type: string;
  sequence?: number;
  unpaid_structure_ids?: number[];
  write_date?: string;
  write_uid?: number | false;
}
