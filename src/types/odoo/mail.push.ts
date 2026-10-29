export interface MailPush {
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  mail_push_device_id: number | false;
  payload?: string;
  write_date?: string;
  write_uid?: number | false;
}