export interface ProjectSaleLineEmployeeMap {
  company_id?: number | false;
  cost?: number;
  cost_currency_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  currency_id?: number | false;
  display_cost?: number;
  display_name?: string;
  employee_id: number | false;
  existing_employee_ids?: number[];
  id?: number;
  is_cost_changed?: boolean;
  partner_id?: number | false;
  price_unit?: number;
  project_id: number | false;
  sale_line_id?: number | false;
  sale_order_id?: number | false;
  write_date?: string;
  write_uid?: number | false;
}