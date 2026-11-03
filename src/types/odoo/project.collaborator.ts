export interface TProjectCollaborator {
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  limited_access?: boolean;
  partner_email?: string;
  partner_id: number | false;
  project_id: number | false;
  write_date?: string;
  write_uid?: number | false;
}