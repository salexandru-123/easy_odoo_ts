export interface TSmsTemplate {
  body: string;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  lang?: string;
  model?: string;
  model_id: number | false;
  name?: string;
  render_model?: string;
  sidebar_action_id?: number | false;
  template_fs?: string;
  write_date?: string;
  write_uid?: number | false;
}