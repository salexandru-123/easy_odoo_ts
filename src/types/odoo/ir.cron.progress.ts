export interface TIrCronProgress {
  create_date?: string;
  create_uid?: number | false;
  cron_id: number | false;
  deactivate?: boolean;
  display_name?: string;
  done?: number;
  id?: number;
  remaining?: number;
  timed_out_counter?: number;
  write_date?: string;
  write_uid?: number | false;
}
