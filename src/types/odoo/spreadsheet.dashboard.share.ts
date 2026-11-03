export interface TSpreadsheetDashboardShare {
  access_token: string;
  create_date?: string;
  create_uid?: number | false;
  current_revision_uuid?: string;
  dashboard_id: number | false;
  display_name?: string;
  display_thumbnail?: string | false;
  excel_export?: string | false;
  full_url?: string;
  id?: number;
  name?: string;
  spreadsheet_binary_data?: string | false;
  spreadsheet_data?: string;
  spreadsheet_file_name?: string;
  spreadsheet_revision_ids?: number[];
  spreadsheet_snapshot?: string | false;
  thumbnail?: string | false;
  write_date?: string;
  write_uid?: number | false;
}