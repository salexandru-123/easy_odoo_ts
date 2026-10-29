export interface SmsAccountCode {
  account_id: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  verification_code: string;
  write_date?: string;
  write_uid?: number | false;
}