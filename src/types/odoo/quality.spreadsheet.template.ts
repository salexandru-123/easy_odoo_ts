export interface TQualitySpreadsheetTemplate {
  check_cell?: string;
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  current_revision_uuid?: string;
  display_name?: string;
  display_thumbnail?: string | false;
  id?: number;
  name: string;
  spreadsheet_binary_data?: string | false;
  spreadsheet_data?: string;
  spreadsheet_file_name?: string;
  spreadsheet_revision_ids?: number[];
  spreadsheet_snapshot?: string | false;
  thumbnail?: string | false;
  write_date?: string;
  write_uid?: number | false;
}