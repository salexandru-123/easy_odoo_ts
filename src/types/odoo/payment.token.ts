export interface TPaymentToken {
  active?: boolean;
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  partner_id: number | false;
  payment_details?: string;
  payment_method_code?: string;
  payment_method_id: number | false;
  provider_code?: string;
  provider_id: number | false;
  provider_ref: string;
  transaction_ids?: number[];
  write_date?: string;
  write_uid?: number | false;
}
