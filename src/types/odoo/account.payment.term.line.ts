export interface AccountPaymentTermLine {
  create_date?: string;
  create_uid?: number | false;
  days_next_month?: string;
  delay_type: string;
  display_days_next_month?: boolean;
  display_name?: string;
  id?: number;
  nb_days?: number;
  payment_id: number | false;
  value: string;
  value_amount?: number;
  write_date?: string;
  write_uid?: number | false;
}