export interface THrRecruitmentStage {
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  fold?: boolean;
  hired_stage?: boolean;
  id?: number;
  is_warning_visible?: boolean;
  job_ids?: number[];
  legend_blocked: string;
  legend_done: string;
  legend_normal: string;
  name: string;
  requirements?: string;
  sequence?: number;
  template_id?: number | false;
  write_date?: string;
  write_uid?: number | false;
}
