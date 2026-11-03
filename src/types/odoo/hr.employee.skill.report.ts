export interface THrEmployeeSkillReport {
  active?: boolean;
  company_id?: number | false;
  department_id?: number | false;
  display_name?: string;
  employee_id?: number | false;
  has_department_manager_access?: boolean;
  id?: number;
  level_progress?: number;
  skill_id?: number | false;
  skill_level?: string;
  skill_type_id?: number | false;
}