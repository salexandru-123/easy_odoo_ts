export interface TPortalShare {
  access_warning?: string;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
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
