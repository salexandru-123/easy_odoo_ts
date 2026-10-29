export interface AccountFiscalPositionAccount {
  account_dest_id: number | false;
  account_src_id: number | false;
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  position_id: number | false;
  write_date?: string;
  write_uid?: number | false;
}