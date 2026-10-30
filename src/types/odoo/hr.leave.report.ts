export interface THrLeaveReport {
  allocation_id?: number | false;
  company_id?: number | false;
  date_from?: string;
  date_to?: string;
  department_id?: number | false;
  display_name?: string;
  employee_id?: number | false;
  has_department_manager_access?: boolean;
  holiday_status_id?: number | false;
  id?: number;
  leave_id?: number | false;
  leave_type?: string;
  name?: string;
  number_of_days?: number;
  number_of_hours?: number;
  state?: string;
}