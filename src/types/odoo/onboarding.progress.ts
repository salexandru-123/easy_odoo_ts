export interface TOnboardingProgress {
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  is_onboarding_closed?: boolean;
  onboarding_id: number | false;
  onboarding_state?: string;
  progress_step_ids?: number[];
  write_date?: string;
  write_uid?: number | false;
}
