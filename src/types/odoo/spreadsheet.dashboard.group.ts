export interface TSpreadsheetDashboardGroup {
  create_date?: string;
  create_uid?: number | false;
  dashboard_ids?: number[];
  display_name?: string;
  id?: number;
  name: string;
  published_dashboard_ids?: number[];
  sequence?: number;
  write_date?: string;
  write_uid?: number | false;
}