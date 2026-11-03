export interface TMailNotification {
  author_id?: number | false;
  display_name?: string;
  failure_reason?: string;
  failure_type?: string;
  id?: number;
  is_read?: boolean;
  letter_id?: number | false;
  mail_mail_id?: number | false;
  mail_message_id: number | false;
  notification_status?: string;
  notification_type: string;
  read_date?: string;
  res_partner_id?: number | false;
  sms_id?: number | false;
  sms_id_int?: number;
  sms_number?: string;
  sms_tracker_ids?: number[];
}