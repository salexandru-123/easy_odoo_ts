export interface TMrpAccountWipAccounting {
  create_date?: string;
  create_uid?: number | false;
  date?: string;
  display_name?: string;
  id?: number;
  journal_id: number | false;
  line_ids?: number[];
  mo_ids?: number[];
  reference?: string;
  reversal_date: string;
  write_date?: string;
  write_uid?: number | false;
}
