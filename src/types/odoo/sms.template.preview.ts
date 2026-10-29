export interface SmsTemplatePreview {
  body?: string;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  lang?: string;
  model_id?: number | false;
  no_record?: boolean;
  resource_ref?: unknown;
  sms_template_id: number | false;
  write_date?: string;
  write_uid?: number | false;
}