export interface MailActivityPlanTemplate {
  activity_type_id: number | false;
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  delay_count?: number;
  delay_from: string;
  delay_unit: string;
  display_name?: string;
  employee_role_id?: number | false;
  icon?: string;
  id?: number;
  is_signature_request?: boolean;
  note?: string;
  plan_id: number | false;
  res_model?: string;
  responsible_count?: number;
  responsible_id?: number | false;
  responsible_type: string;
  sequence?: number;
  sign_template_id?: number | false;
  sign_template_responsible_ids?: number[];
  summary?: string;
  write_date?: string;
  write_uid?: number | false;
}