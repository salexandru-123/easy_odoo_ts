export interface TAccountMoveReversal {
  available_journal_ids?: number[];
  company_id: number | false;
  country_code?: string;
  create_date?: string;
  create_uid?: number | false;
  currency_id?: number | false;
  date?: string;
  display_name?: string;
  id?: number;
  journal_id: number | false;
  move_ids?: number[];
  move_type?: string;
  new_move_ids?: number[];
  reason?: string;
  residual?: number;
  write_date?: string;
  write_uid?: number | false;
}
