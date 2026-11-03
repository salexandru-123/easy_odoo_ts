export interface TProjectShareWizard {
  access_warning?: string;
  collaborator_ids?: number[];
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  existing_partner_ids?: number[];
  id?: number;
  note?: string;
  partner_ids: number[];
  res_id: number;
  res_model: string;
  resource_ref?: unknown;
  share_link?: string;
  write_date?: string;
  write_uid?: number | false;
}