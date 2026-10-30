export interface TProjectTaskType {
  active?: boolean;
  auto_validation_state?: boolean;
  create_date?: string;
  create_uid?: number | false;
  disabled_rating_warning?: string;
  display_name?: string;
  fold?: boolean;
  id?: number;
  mail_template_id?: number | false;
  name: string;
  project_ids?: number[];
  rating_template_id?: number | false;
  sequence?: number;
  sms_template_id?: number | false;
  user_id?: number | false;
  write_date?: string;
  write_uid?: number | false;
}