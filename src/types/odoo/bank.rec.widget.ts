export interface TBankRecWidget {
  available_reco_model_ids?: number[];
  company_currency_id?: number | false;
  company_id?: number | false;
  country_code?: string;
  display_name?: string;
  form_index?: string;
  id?: number;
  is_multi_currency?: boolean;
  journal_currency_id?: number | false;
  line_ids?: number[];
  matched_sale_order_ids?: number[];
  matching_rules_allow_auto_reconcile?: boolean;
  move_id?: number | false;
  partner_id?: number | false;
  partner_name?: string;
  return_todo_command?: unknown;
  selected_aml_ids?: number[];
  selected_batch_payment_ids?: number[];
  selected_reco_model_id?: number | false;
  st_line_checked?: boolean;
  st_line_id?: number | false;
  st_line_is_reconciled?: boolean;
  st_line_journal_id?: number | false;
  st_line_transaction_details?: string;
  state?: string;
  todo_command?: unknown;
  transaction_currency_id?: number | false;
}