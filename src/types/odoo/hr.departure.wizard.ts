export interface HrDepartureWizard {
  cancel_appraisal?: boolean;
  create_date?: string;
  create_uid?: number | false;
  departure_date: string;
  departure_description?: string;
  departure_reason_id: number | false;
  display_name?: string;
  employee_id: number | false;
  id?: number;
  release_campany_car?: boolean;
  set_date_end?: boolean;
  unassign_equipment?: boolean;
  write_date?: string;
  write_uid?: number | false;
}