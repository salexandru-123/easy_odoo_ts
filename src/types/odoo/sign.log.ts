export interface SignLog {
  action: string;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  ip: string;
  latitude?: number;
  log_date: string;
  log_hash?: string;
  longitude?: number;
  partner_id?: number | false;
  request_state: string;
  sign_request_id: number | false;
  sign_request_item_id?: number | false;
  token?: string;
  user_id?: number | false;
  write_date?: string;
  write_uid?: number | false;
}