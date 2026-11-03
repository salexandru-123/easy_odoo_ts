export interface TResourceResource {
  active?: boolean;
  avatar_128?: string | false;
  calendar_id?: number | false;
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  department_id?: number | false;
  display_name?: string;
  email?: string;
  employee_id?: number[];
  employee_skill_ids?: number[];
  hr_icon_display?: string;
  id?: number;
  im_status?: string;
  job_title?: string;
  name: string;
  phone?: string;
  resource_type: string;
  share?: boolean;
  show_hr_icon_display?: boolean;
  time_efficiency: number;
  tz: string;
  user_id?: number | false;
  work_email?: string;
  work_phone?: string;
  write_date?: string;
  write_uid?: number | false;
}