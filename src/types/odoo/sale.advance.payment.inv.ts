export interface SaleAdvancePaymentInv {
  advance_payment_method: string;
  amount?: number;
  amount_invoiced?: number;
  amount_to_invoice?: number;
  company_id?: number | false;
  consolidated_billing?: boolean;
  count?: number;
  create_date?: string;
  create_uid?: number | false;
  currency_id?: number | false;
  date_end_invoice_timesheet?: string;
  date_start_invoice_timesheet?: string;
  deduct_down_payments?: boolean;
  display_draft_invoice_warning?: boolean;
  display_invoice_amount_warning?: boolean;
  display_name?: string;
  fixed_amount?: number;
  has_down_payments?: boolean;
  has_timer_running?: boolean;
  id?: number;
  invoicing_timesheet_enabled?: boolean;
  sale_order_ids?: number[];
  step?: string;
  write_date?: string;
  write_uid?: number | false;
}