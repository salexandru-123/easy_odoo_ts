export interface TMailMessageSchedule {
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  mail_message_id: number | false;
  notification_parameters?: string;
  scheduled_datetime: string;
  write_date?: string;
  write_uid?: number | false;
}