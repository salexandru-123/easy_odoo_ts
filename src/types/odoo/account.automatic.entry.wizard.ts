export interface AccountAutomaticEntryWizard {
  account_type?: string;
  action: string;
  company_currency_id?: number | false;
  company_id: number | false;
  create_date?: string;
  create_uid?: number | false;
  date: string;
  destination_account_id?: number | false;
  display_currency_helper?: boolean;
  display_name?: string;
  expense_accrual_account?: number | false;
  id?: number;
  journal_id: number | false;
  lock_date_message?: string;
  move_data?: string;
  move_line_ids?: number[];
  percentage?: number;
  preview_move_data?: string;
  revenue_accrual_account?: number | false;
  total_amount?: number;
  write_date?: string;
  write_uid?: number | false;
}