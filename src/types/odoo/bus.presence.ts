export interface BusPresence {
  display_name?: string;
  guest_id?: number | false;
  id?: number;
  last_poll?: string;
  last_presence?: string;
  status?: string;
  user_id?: number | false;
}