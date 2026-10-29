export interface HrAppraisalSkill {
  appraisal_id: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  employee_id?: number | false;
  employee_skill_id?: number | false;
  id?: number;
  justification?: string;
  level_progress?: number;
  manager_ids?: number[];
  previous_skill_level_id?: number | false;
  skill_id: number | false;
  skill_level_id: number | false;
  skill_type_id?: number | false;
  write_date?: string;
  write_uid?: number | false;
}