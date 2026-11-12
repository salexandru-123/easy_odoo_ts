export interface TCalendarProviderConfig {
  cal_client_id?: string;
  cal_client_secret?: string;
  cal_sync_paused?: boolean;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  external_calendar_provider?: string;
  id?: number;
  microsoft_outlook_client_identifier?: string;
  microsoft_outlook_client_secret?: string;
  microsoft_outlook_sync_paused?: boolean;
  write_date?: string;
  write_uid?: number | false;
}
