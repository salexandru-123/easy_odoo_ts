export interface MailComposerMixin {
  body?: string;
  body_has_template_value?: boolean;
  can_edit_body?: boolean;
  is_mail_template_editor?: boolean;
  lang?: string;
  render_model?: string;
  subject?: string;
  template_id?: number | false;
}