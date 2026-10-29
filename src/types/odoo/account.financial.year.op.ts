export interface AccountFinancialYearOp {
  company_id: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  fiscalyear_last_day: number;
  fiscalyear_last_month: string;
  id?: number;
  opening_date: string;
  opening_move_posted?: boolean;
  write_date?: string;
  write_uid?: number | false;
}