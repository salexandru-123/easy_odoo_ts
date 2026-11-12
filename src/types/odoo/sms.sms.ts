export interface TSmsSms {
  body?: string;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  failure_type?: string;
  id?: number;
  mail_message_id?: number | false;
  number?: string;
  partner_id?: number | false;
  sms_tracker_id?: number | false;
  state: string;
  to_delete?: boolean;
  uuid?: string;
  write_date?: string;
  write_uid?: number | false;
}
