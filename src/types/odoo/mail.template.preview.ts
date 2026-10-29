export interface MailTemplatePreview {
  attachment_ids?: number[];
  body_html?: string;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  email_cc?: string;
  email_from?: string;
  email_to?: string;
  error_msg?: string;
  id?: number;
  lang?: string;
  mail_template_id: number | false;
  model_id?: number | false;
  no_record?: boolean;
  partner_ids?: number[];
  reply_to?: string;
  resource_ref?: unknown;
  scheduled_date?: string;
  subject?: string;
  write_date?: string;
  write_uid?: number | false;
}