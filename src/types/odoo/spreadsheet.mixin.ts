export interface TSpreadsheetMixin {
  current_revision_uuid?: string;
  display_thumbnail?: string | false;
  spreadsheet_binary_data?: string | false;
  spreadsheet_data?: string;
  spreadsheet_file_name?: string;
  spreadsheet_revision_ids?: number[];
  spreadsheet_snapshot?: string | false;
  thumbnail?: string | false;
}
