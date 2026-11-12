export interface TOnboardingOnboardingStep {
  button_text: string;
  create_date?: string;
  create_uid?: number | false;
  current_progress_step_id?: number | false;
  current_step_state?: string;
  description?: string;
  display_name?: string;
  done_icon?: string;
  done_text?: string;
  id?: number;
  is_per_company?: boolean;
  onboarding_ids?: number[];
  panel_step_open_action_name?: string;
  progress_ids?: number[];
  sequence?: number;
  step_image?: string | false;
  step_image_alt?: string;
  step_image_filename?: string;
  title?: string;
  write_date?: string;
  write_uid?: number | false;
}
