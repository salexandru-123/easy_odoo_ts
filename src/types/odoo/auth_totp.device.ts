export interface TAuth_totpDevice {
  create_date?: string;
  display_name?: string;
  expiration_date?: string;
  id?: number;
  name: string;
  scope?: string;
  user_id: number | false;
}