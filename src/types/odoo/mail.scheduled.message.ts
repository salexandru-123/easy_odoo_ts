export interface MailScheduledMessage {
  attachment_ids?: number[];
  author_id: number | false;
  body?: string;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  is_note?: boolean;
  model: string;
  notification_parameters?: string;
  partner_ids?: number[];
  res_id: unknown;
  scheduled_date: string;
  subject?: string;
  write_date?: string;
  write_uid?: number | false;
}