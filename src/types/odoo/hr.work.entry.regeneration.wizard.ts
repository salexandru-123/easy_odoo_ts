export interface THrWorkEntryRegenerationWizard {
  create_date?: string;
  create_uid?: number | false;
  date_from: string;
  date_to: string;
  display_name?: string;
  earliest_available_date?: string;
  earliest_available_date_message?: string;
  employee_ids: number[];
  id?: number;
  latest_available_date?: string;
  latest_available_date_message?: string;
  search_criteria_completed?: boolean;
  valid?: boolean;
  validated_work_entry_ids?: number[];
  write_date?: string;
  write_uid?: number | false;
}