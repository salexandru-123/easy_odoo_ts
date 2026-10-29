export interface MailPushDevice {
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  endpoint: string;
  expiration_time?: string;
  id?: number;
  keys: string;
  partner_id: number | false;
  write_date?: string;
  write_uid?: number | false;
}