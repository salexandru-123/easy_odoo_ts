export interface TAccountTaxRepartitionLine {
  account_id?: number | false;
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  document_type: string;
  factor?: number;
  factor_percent: number;
  id?: number;
  repartition_type: string;
  sequence?: number;
  tag_ids?: number[];
  tag_ids_domain?: string | false;
  tax_id?: number | false;
  use_in_tax_closing?: boolean;
  write_date?: string;
  write_uid?: number | false;
}
