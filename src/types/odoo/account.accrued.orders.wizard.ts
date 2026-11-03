export interface TAccountAccruedOrdersWizard {
  account_id: number | false;
  amount?: number;
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  currency_id?: number | false;
  date: string;
  display_amount?: boolean;
  display_name?: string;
  id?: number;
  journal_id: number | false;
  preview_data?: string;
  reversal_date: string;
  write_date?: string;
  write_uid?: number | false;
}