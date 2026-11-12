export interface TAccountTransferModel {
  account_ids?: number[];
  active?: boolean;
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  date_start: string;
  date_stop?: string;
  display_name?: string;
  frequency: string;
  id?: number;
  journal_id: number | false;
  line_ids?: number[];
  move_ids?: number[];
  move_ids_count?: number;
  name: string;
  state: string;
  total_percent?: number;
  write_date?: string;
  write_uid?: number | false;
}
