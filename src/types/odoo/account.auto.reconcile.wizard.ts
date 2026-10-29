export interface AccountAutoReconcileWizard {
  account_ids?: number[];
  company_id: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  from_date?: string;
  id?: number;
  line_ids?: number[];
  partner_ids?: number[];
  search_mode: string;
  to_date: string;
  write_date?: string;
  write_uid?: number | false;
}