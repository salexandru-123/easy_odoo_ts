export interface AccountPaymentTerm {
  active?: boolean;
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  currency_id?: number | false;
  discount_days?: number;
  discount_percentage?: number;
  display_name?: string;
  display_on_invoice?: boolean;
  early_discount?: boolean;
  early_pay_discount_computation?: string;
  example_amount?: number;
  example_date?: string;
  example_invalid?: boolean;
  example_preview?: string;
  example_preview_discount?: string;
  fiscal_country_codes?: string;
  id?: number;
  line_ids?: number[];
  name: string;
  note?: string;
  sequence: number;
  write_date?: string;
  write_uid?: number | false;
}