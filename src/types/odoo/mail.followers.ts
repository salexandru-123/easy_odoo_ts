export interface TMailFollowers {
  display_name?: string;
  email?: string;
  id?: number;
  is_active?: boolean;
  name?: string;
  partner_id: number | false;
  res_id?: unknown;
  res_model: string;
  subtype_ids?: number[];
}