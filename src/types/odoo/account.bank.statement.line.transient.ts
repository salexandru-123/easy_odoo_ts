export interface TAccountBankStatementLineTransient {
  account_number?: string;
  amount?: number;
  amount_currency?: number;
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  currency_id?: number | false;
  date?: string;
  display_name?: string;
  foreign_currency_id?: number | false;
  id?: number;
  journal_id?: number | false;
  online_account_id?: number | false;
  online_transaction_identifier?: string;
  partner_name?: string;
  payment_ref?: string;
  sequence?: number;
  state?: string;
  transaction_details?: string;
  write_date?: string;
  write_uid?: number | false;
}
