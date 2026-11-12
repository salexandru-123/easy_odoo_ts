export interface TOnboardingOnboarding {
  create_date?: string;
  create_uid?: number | false;
  current_onboarding_state?: string;
  current_progress_id?: number | false;
  display_name?: string;
  id?: number;
  is_onboarding_closed?: boolean;
  is_per_company?: boolean;
  name?: string;
  panel_close_action_name?: string;
  progress_ids?: number[];
  route_name: string;
  sequence?: number;
  step_ids?: number[];
  text_completed?: string;
  write_date?: string;
  write_uid?: number | false;
}
