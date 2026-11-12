export interface TTimerMixin {
  display_timer_pause?: boolean;
  display_timer_resume?: boolean;
  display_timer_start_primary?: boolean;
  display_timer_stop?: boolean;
  is_timer_running?: boolean;
  timer_pause?: string;
  timer_start?: string;
  user_timer_id?: number[];
}
