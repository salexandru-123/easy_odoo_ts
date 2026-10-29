export interface MoviaDevice {
  active_device?: boolean;
  create_date?: string;
  create_uid?: number | false;
  device_type?: string;
  direction: string;
  display_name?: string;
  id?: number;
  movia_device_id: string;
  name: string;
  serial_number?: string;
  write_date?: string;
  write_uid?: number | false;
  zone_id: number | false;
}