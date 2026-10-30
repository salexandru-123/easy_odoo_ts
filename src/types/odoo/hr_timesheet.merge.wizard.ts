export interface THr_timesheetMergeWizard {
  create_date?: string;
  create_uid?: number | false;
  date?: string;
  display_name?: string;
  employee_id?: number | false;
  encoding_uom_id?: number | false;
  id?: number;
  name?: string;
  project_id?: number | false;
  task_id?: number | false;
  timesheet_ids?: number[];
  unit_amount?: number;
  write_date?: string;
  write_uid?: number | false;
}