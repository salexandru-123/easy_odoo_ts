export interface TAccountPartialReconcile {
  amount?: number;
  company_currency_id?: number | false;
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  credit_amount_currency?: number;
  credit_currency_id?: number | false;
  credit_move_id: number | false;
  debit_amount_currency?: number;
  debit_currency_id?: number | false;
  debit_move_id: number | false;
  display_name?: string;
  exchange_move_id?: number | false;
  full_reconcile_id?: number | false;
  id?: number;
  max_date?: string;
  write_date?: string;
  write_uid?: number | false;
}