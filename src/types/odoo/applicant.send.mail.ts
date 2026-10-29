export interface ApplicantSendMail {
  applicant_ids: number[];
  attachment_ids?: number[];
  author_id: number | false;
  body?: string;
  body_has_template_value?: boolean;
  can_edit_body?: boolean;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  is_mail_template_editor?: boolean;
  lang?: string;
  render_model?: string;
  subject?: string;
  template_id?: number | false;
  write_date?: string;
  write_uid?: number | false;
}