export interface TimerTimer {
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  is_timer_running?: boolean;
  res_id: number;
  res_model: string;
  timer_pause?: string;
  timer_start?: string;
  user_id?: number | false;
  write_date?: string;
  write_uid?: number | false;
}