export interface ResDevice {
  browser?: string;
  city?: string;
  country?: string;
  create_date?: string;
  create_uid?: number | false;
  device_type?: string;
  display_name?: string;
  first_activity?: string;
  id?: number;
  ip_address?: string;
  is_current?: boolean;
  last_activity?: string;
  linked_ip_addresses?: string;
  platform?: string;
  revoked?: boolean;
  session_identifier: string;
  user_id?: number | false;
  write_date?: string;
  write_uid?: number | false;
}