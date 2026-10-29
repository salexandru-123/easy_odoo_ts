export interface MailMessageTranslation {
  body: string;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  message_id: number | false;
  source_lang: string;
  target_lang: string;
  write_date?: string;
  write_uid?: number | false;
}