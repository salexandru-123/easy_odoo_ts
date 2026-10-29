export interface ResUsersSettings {
  calendar_default_privacy: string;
  channel_notifications?: string;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  homemenu_config?: unknown;
  id?: number;
  is_discuss_sidebar_category_channel_open?: boolean;
  is_discuss_sidebar_category_chat_open?: boolean;
  mute_until_dt?: string;
  push_to_talk_key?: string;
  use_push_to_talk?: boolean;
  user_id: number | false;
  voice_active_duration?: number;
  volume_settings_ids?: number[];
  write_date?: string;
  write_uid?: number | false;
}