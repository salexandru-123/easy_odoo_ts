export interface HrExpenseSplit {
  analytic_distribution?: unknown;
  analytic_precision?: number;
  can_be_reinvoiced?: boolean;
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  currency_id?: number | false;
  display_name?: string;
  distribution_analytic_account_ids?: number[];
  employee_id: number | false;
  expense_id?: number | false;
  id?: number;
  name: string;
  product_has_cost?: boolean;
  product_has_tax?: boolean;
  product_id: number | false;
  sale_order_id?: number | false;
  tax_amount_currency?: number;
  tax_ids?: number[];
  total_amount_currency: number;
  wizard_id?: number | false;
  write_date?: string;
  write_uid?: number | false;
}