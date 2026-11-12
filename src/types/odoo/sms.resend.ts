export interface TSmsResend {
  can_cancel?: boolean;
  can_resend?: boolean;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  has_insufficient_credit?: boolean;
  has_unregistered_account?: boolean;
  id?: number;
  mail_message_id: number | false;
  recipient_ids?: number[];
  write_date?: string;
  write_uid?: number | false;
}
