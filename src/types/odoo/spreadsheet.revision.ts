export interface SpreadsheetRevision {
  active?: boolean;
  commands: string;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  name?: string;
  parent_revision_id?: number | false;
  res_id: unknown;
  res_model: string;
  revision_uuid: string;
  write_date?: string;
  write_uid?: number | false;
}