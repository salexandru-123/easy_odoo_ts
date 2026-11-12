export interface THrPayrollStructureType {
  country_code?: string;
  country_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  default_resource_calendar_id?: number | false;
  default_schedule_pay?: string;
  default_struct_id?: number | false;
  default_work_entry_type_id: number | false;
  display_name?: string;
  id?: number;
  name: string;
  sequence?: number;
  struct_ids?: number[];
  struct_type_count?: number;
  wage_type: string;
  write_date?: string;
  write_uid?: number | false;
}
