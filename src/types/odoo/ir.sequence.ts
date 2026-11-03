export interface TIrSequence {
  active?: boolean;
  code?: string;
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  date_range_ids?: number[];
  display_name?: string;
  id?: number;
  implementation: string;
  name: string;
  number_increment: number;
  number_next: number;
  number_next_actual?: number;
  padding: number;
  prefix?: string;
  suffix?: string;
  use_date_range?: boolean;
  write_date?: string;
  write_uid?: number | false;
}