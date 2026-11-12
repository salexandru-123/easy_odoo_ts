export interface TPaymentMethod {
  active?: boolean;
  brand_ids?: number[];
  code: string;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  image: string | false;
  image_payment_form?: string | false;
  is_primary?: boolean;
  name: string;
  primary_payment_method_id?: number | false;
  provider_ids?: number[];
  sequence?: number;
  support_express_checkout?: boolean;
  support_refund: string;
  support_tokenization?: boolean;
  supported_country_ids?: number[];
  supported_currency_ids?: number[];
  write_date?: string;
  write_uid?: number | false;
}
