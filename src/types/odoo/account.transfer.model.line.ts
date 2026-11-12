export interface TAccountTransferModelLine {
  account_id: number | false;
  analytic_account_ids?: number[];
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  partner_ids?: number[];
  percent: number;
  percent_is_readonly?: boolean;
  sequence?: number;
  transfer_model_id: number | false;
  write_date?: string;
  write_uid?: number | false;
}
