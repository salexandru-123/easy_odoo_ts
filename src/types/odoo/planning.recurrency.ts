export interface TPlanningRecurrency {
  company_id: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  last_generated_end_datetime?: string;
  repeat_interval: number;
  repeat_number?: number;
  repeat_type?: string;
  repeat_unit: string;
  repeat_until?: string;
  slot_ids?: number[];
  write_date?: string;
  write_uid?: number | false;
}
