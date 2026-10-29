export interface AccountAnalyticDistributionModel {
  account_prefix?: string;
  analytic_distribution?: unknown;
  analytic_precision?: number;
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  distribution_analytic_account_ids?: number[];
  id?: number;
  partner_category_id?: number | false;
  partner_id?: number | false;
  prefix_placeholder?: string;
  product_categ_id?: number | false;
  product_id?: number | false;
  sequence?: number;
  write_date?: string;
  write_uid?: number | false;
}