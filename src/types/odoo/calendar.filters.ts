export interface CalendarFilters {
  active?: boolean;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  partner_checked?: boolean;
  partner_id: number | false;
  user_id: number | false;
  write_date?: string;
  write_uid?: number | false;
}