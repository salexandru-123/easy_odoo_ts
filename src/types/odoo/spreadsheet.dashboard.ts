export interface TSpreadsheetDashboard {
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  current_revision_uuid?: string;
  dashboard_group_id: number | false;
  display_name?: string;
  display_thumbnail?: string | false;
  group_ids?: number[];
  id?: number;
  is_published?: boolean;
  main_data_model_ids?: number[];
  name: string;
  sample_dashboard_file_path?: string;
  sequence?: number;
  spreadsheet_binary_data?: string | false;
  spreadsheet_data?: string;
  spreadsheet_file_name?: string;
  spreadsheet_revision_ids?: number[];
  spreadsheet_snapshot?: string | false;
  thumbnail?: string | false;
  write_date?: string;
  write_uid?: number | false;
}