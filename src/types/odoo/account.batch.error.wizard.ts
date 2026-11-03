export interface TAccountBatchErrorWizard {
  batch_payment_id: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  error_line_ids?: number[];
  id?: number;
  show_remove_options: boolean;
  warning_line_ids?: number[];
  write_date?: string;
  write_uid?: number | false;
}