export interface TPaymentRefundWizard {
  amount_available_for_refund?: number;
  amount_to_refund?: number;
  create_date?: string;
  create_uid?: number | false;
  currency_id?: number | false;
  display_name?: string;
  has_pending_refund?: boolean;
  id?: number;
  payment_amount?: number;
  payment_id?: number | false;
  refunded_amount?: number;
  support_refund?: string;
  transaction_id?: number | false;
  write_date?: string;
  write_uid?: number | false;
}