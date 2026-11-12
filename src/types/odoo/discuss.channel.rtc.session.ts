export interface TDiscussChannelRtcSession {
  channel_id?: number | false;
  channel_member_id: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  guest_id?: number | false;
  id?: number;
  is_camera_on?: boolean;
  is_deaf?: boolean;
  is_muted?: boolean;
  is_screen_sharing_on?: boolean;
  partner_id?: number | false;
  write_date?: string;
  write_uid?: number | false;
}
