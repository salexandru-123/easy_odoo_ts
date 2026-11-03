export interface TAccountPaymentMethod {
  code: string;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  name: string;
  payment_type: string;
  write_date?: string;
  write_uid?: number | false;
}