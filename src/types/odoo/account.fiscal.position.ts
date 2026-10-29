export interface AccountFiscalPosition {
  account_ids?: number[];
  account_map?: string | false;
  active?: boolean;
  auto_apply?: boolean;
  company_country_id?: number | false;
  company_id: number | false;
  country_group_id?: number | false;
  country_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  fiscal_country_codes?: string;
  foreign_vat?: string;
  foreign_vat_header_mode?: string;
  id?: number;
  name: string;
  note?: string;
  sequence?: number;
  state_ids?: number[];
  states_count?: number;
  tax_ids?: number[];
  tax_map?: string | false;
  vat_required?: boolean;
  write_date?: string;
  write_uid?: number | false;
  zip_from?: string;
  zip_to?: string;
}