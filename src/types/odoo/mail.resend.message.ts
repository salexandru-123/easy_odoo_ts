export interface MailResendMessage {
  can_cancel?: boolean;
  can_resend?: boolean;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  mail_message_id?: number | false;
  notification_ids?: number[];
  partner_ids?: number[];
  partner_readonly?: boolean;
  write_date?: string;
  write_uid?: number | false;
}