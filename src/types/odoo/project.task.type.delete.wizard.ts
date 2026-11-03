export interface TProjectTaskTypeDeleteWizard {
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  project_ids?: number[];
  stage_ids?: number[];
  stages_active?: boolean;
  tasks_count?: number;
  write_date?: string;
  write_uid?: number | false;
}