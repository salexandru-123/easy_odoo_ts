export interface TAccountImportSummary {
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  import_summary_account_ids?: number[];
  import_summary_have_data?: boolean;
  import_summary_journal_ids?: number[];
  import_summary_len_account?: number;
  import_summary_len_journal?: number;
  import_summary_len_move?: number;
  import_summary_len_partner?: number;
  import_summary_len_tax?: number;
  import_summary_move_ids?: number[];
  import_summary_name?: string;
  import_summary_partner_ids?: number[];
  import_summary_tax_ids?: number[];
  write_date?: string;
  write_uid?: number | false;
}