export interface THrAppraisalSkillReport {
    company_id?: number | false;
    create_date?: string;
    current_level_progress?: number;
    current_skill_level_id?: number | false;
    department_id?: number | false;
    display_name?: string;
    employee_id?: number | false;
    evolution?: string;
    evolution_sequence?: number;
    id?: number;
    justification?: string;
    previous_level_progress?: number;
    previous_skill_level_id?: number | false;
    progress_evolution?: number;
    skill_id?: number | false;
    skill_type_id?: number | false;
}
