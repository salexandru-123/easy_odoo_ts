export interface THrRecruitmentStageReport {
  applicant_id?: number | false;
  company_id?: number | false;
  date_begin?: string;
  date_end?: string;
  days_in_stage?: number;
  display_name?: string;
  id?: number;
  job_id?: number | false;
  name?: string;
  stage_id?: number | false;
  state?: string;
}