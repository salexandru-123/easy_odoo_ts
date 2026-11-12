export interface TAccountMoveSendWizard {
  alerts?: unknown;
  attachments_not_supported?: unknown;
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_attachments_widget?: boolean;
  display_name?: string;
  display_pdf_report_id?: boolean;
  extra_edi_checkboxes?: unknown;
  extra_edis?: unknown;
  id?: number;
  invoice_edi_format?: string;
  is_download_only?: boolean;
  mail_attachments_widget?: unknown;
  mail_body?: string;
  mail_lang?: string;
  mail_partner_ids?: number[];
  mail_subject?: string;
  mail_template_id?: number | false;
  move_id: number | false;
  pdf_report_id?: number | false;
  sending_method_checkboxes?: unknown;
  sending_methods?: unknown;
  write_date?: string;
  write_uid?: number | false;
}
