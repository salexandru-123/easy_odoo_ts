export interface AccountReconcileModelLine {
  account_id?: number | false;
  allow_payment_tolerance?: boolean;
  amount?: number;
  amount_string: string;
  amount_type: string;
  analytic_distribution?: unknown;
  analytic_precision?: number;
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  distribution_analytic_account_ids?: number[];
  force_tax_included?: boolean;
  id?: number;
  journal_id?: number | false;
  label?: string;
  model_id?: number | false;
  payment_tolerance_param?: number;
  rule_type?: string;
  sequence: number;
  show_force_tax_included?: boolean;
  tax_ids?: number[];
  write_date?: string;
  write_uid?: number | false;
}