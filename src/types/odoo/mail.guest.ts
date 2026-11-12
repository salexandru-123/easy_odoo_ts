export interface TMailGuest {
  access_token: string;
  avatar_1024?: string | false;
  avatar_128?: string | false;
  avatar_1920?: string | false;
  avatar_256?: string | false;
  avatar_512?: string | false;
  channel_ids?: number[];
  country_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  im_status?: string;
  image_1024?: string | false;
  image_128?: string | false;
  image_1920?: string | false;
  image_256?: string | false;
  image_512?: string | false;
  lang?: string;
  name: string;
  timezone?: string;
  write_date?: string;
  write_uid?: number | false;
}
