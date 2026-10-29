export interface ReportPaperformat {
  create_date?: string;
  create_uid?: number | false;
  css_margins?: boolean;
  default?: boolean;
  disable_shrinking?: boolean;
  display_name?: string;
  dpi: number;
  format?: string;
  header_line?: boolean;
  header_spacing?: number;
  id?: number;
  margin_bottom?: number;
  margin_left?: number;
  margin_right?: number;
  margin_top?: number;
  name: string;
  orientation?: string;
  page_height?: number;
  page_width?: number;
  print_page_height?: number;
  print_page_width?: number;
  report_ids?: number[];
  write_date?: string;
  write_uid?: number | false;
}