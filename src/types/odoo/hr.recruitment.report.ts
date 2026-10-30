export interface THrRecruitmentReport {
  company_id?: number | false;
  count?: number;
  create_date?: string;
  create_uid?: number | false;
  date_closed?: string;
  display_name?: string;
  hired?: number;
  hiring_ratio?: number;
  id?: number;
  in_progress?: number;
  job_id?: number | false;
  medium_id?: number | false;
  meetings_amount?: number;
  name?: string;
  process_duration?: number;
  refuse_reason_id?: number | false;
  refused?: number;
  source_id?: number | false;
  stage_id?: number | false;
  state?: string;
  user_id?: number | false;
}