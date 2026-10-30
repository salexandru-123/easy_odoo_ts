export interface THrExpenseSplitWizard {
  create_date?: string;
  create_uid?: number | false;
  currency_id?: number | false;
  display_name?: string;
  expense_id: number | false;
  expense_split_line_ids?: number[];
  id?: number;
  split_possible?: boolean;
  tax_amount_currency?: number;
  total_amount_currency?: number;
  total_amount_currency_original?: number;
  write_date?: string;
  write_uid?: number | false;
}