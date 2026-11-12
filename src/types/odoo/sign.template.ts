export interface TSignTemplate {
  active?: boolean;
  attachment_id: number | false;
  authorized_ids?: number[];
  color?: number;
  create_date?: string;
  create_uid?: number | false;
  datas?: string | false;
  display_name?: string;
  favorited_ids?: number[];
  group_ids?: number[];
  has_sign_requests?: boolean;
  id?: number;
  in_progress_count?: number;
  is_sharing?: boolean;
  name?: string;
  num_pages?: number;
  redirect_url?: string;
  redirect_url_text?: string;
  responsible_count?: number;
  sign_item_ids?: number[];
  sign_request_ids?: number[];
  signed_count?: number;
  tag_ids?: number[];
  user_id?: number | false;
  write_date?: string;
  write_uid?: number | false;
}
