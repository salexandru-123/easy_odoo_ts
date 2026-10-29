export interface MailActivityPlan {
  active?: boolean;
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  department_assignable?: boolean;
  department_id?: number | false;
  display_name?: string;
  has_user_on_demand?: boolean;
  id?: number;
  name: string;
  res_model: string;
  res_model_id: number | false;
  steps_count?: number;
  template_ids?: number[];
  write_date?: string;
  write_uid?: number | false;
}