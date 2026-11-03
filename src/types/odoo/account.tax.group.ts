export interface TAccountTaxGroup {
  advance_tax_payment_account_id?: number | false;
  company_id: number | false;
  country_code?: string;
  country_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  name: string;
  pos_receipt_label?: string;
  preceding_subtotal?: string;
  sequence?: number;
  tax_payable_account_id?: number | false;
  tax_receivable_account_id?: number | false;
  write_date?: string;
  write_uid?: number | false;
}