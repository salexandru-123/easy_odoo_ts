export interface THrLeaveAllocationGenerateMultiWizard {
  accrual_plan_id?: number | false;
  allocation_mode: string;
  allocation_type: string;
  category_id?: number | false;
  company_id: number | false;
  create_date?: string;
  create_uid?: number | false;
  date_from: string;
  date_to?: string;
  department_id?: number | false;
  display_name?: string;
  duration?: number;
  employee_ids?: number[];
  holiday_status_id: number | false;
  id?: number;
  name?: string;
  notes?: string;
  request_unit?: string;
  write_date?: string;
  write_uid?: number | false;
}