export interface TAccountReportLine {
  account_codes_formula?: string;
  action_id?: number | false;
  aggregation_formula?: string;
  children_ids?: number[];
  code?: string;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  domain_formula?: string;
  expression_ids?: number[];
  external_formula?: string;
  foldable?: boolean;
  groupby?: string;
  hide_if_zero?: boolean;
  hierarchy_level: number;
  horizontal_split_side?: string;
  id?: number;
  name: string;
  parent_id?: number | false;
  print_on_new_page?: boolean;
  report_id: number | false;
  sequence?: number;
  tax_tags_formula?: string;
  user_groupby?: string;
  write_date?: string;
  write_uid?: number | false;
}
