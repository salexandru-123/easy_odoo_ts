export interface TExpenseSampleRegister {
  amount?: number;
  available_payment_method_line_ids?: number[];
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  currency_id?: number | false;
  date: string;
  display_name?: string;
  hide_partial?: boolean;
  hide_payment_method_line?: boolean;
  id?: number;
  journal_id?: number | false;
  memo?: string;
  partial_mode?: string;
  payment_method_line_id?: number | false;
  sheet_id?: number | false;
  write_date?: string;
  write_uid?: number | false;
}