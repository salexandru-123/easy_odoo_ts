export interface CalendarAttendee {
  access_token?: string;
  availability?: string;
  common_name?: string;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  email?: string;
  event_id: number | false;
  id?: number;
  mail_tz?: string;
  partner_id: number | false;
  phone?: string;
  recurrence_id?: number | false;
  state?: string;
  write_date?: string;
  write_uid?: number | false;
}