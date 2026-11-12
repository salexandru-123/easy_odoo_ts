export interface TMailActivityPlanTemplate {
  activity_type_id: number | false;
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  delay_count?: number;
  delay_from: string;
  delay_unit: string;
  display_name?: string;
  icon?: string;
  id?: number;
  note?: string;
  plan_id: number | false;
  res_model?: string;
  responsible_id?: number | false;
  responsible_type: string;
  sequence?: number;
  summary?: string;
  write_date?: string;
  write_uid?: number | false;
}
