export interface TRequestAppraisal {
  appraisal_id: number | false;
  author_id: number | false;
  body?: string;
  body_has_template_value?: boolean;
  can_edit_body?: boolean;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  employee_id?: number | false;
  id?: number;
  is_mail_template_editor?: boolean;
  lang?: string;
  recipient_ids: number[];
  render_model?: string;
  subject?: string;
  template_id?: number | false;
  user_body?: string;
  write_date?: string;
  write_uid?: number | false;
}