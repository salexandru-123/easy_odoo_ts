export interface TResCurrency {
  active?: boolean;
  create_date?: string;
  create_uid?: number | false;
  currency_subunit_label?: string;
  currency_unit_label?: string;
  date?: string;
  decimal_places?: number;
  display_name?: string;
  display_rounding_warning?: boolean;
  fiscal_country_codes?: string;
  full_name?: string;
  id?: number;
  inverse_rate?: number;
  is_current_company_currency?: boolean;
  iso_numeric?: number;
  name: string;
  position?: string;
  rate?: number;
  rate_ids?: number[];
  rate_string?: string;
  rounding?: number;
  symbol: string;
  write_date?: string;
  write_uid?: number | false;
}