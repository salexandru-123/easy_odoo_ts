export interface TResCountry {
  address_format?: string;
  address_view_id?: number | false;
  code: string;
  country_group_ids?: number[];
  create_date?: string;
  create_uid?: number | false;
  currency_id?: number | false;
  display_name?: string;
  id?: number;
  image_url?: string;
  is_stripe_supported_country?: boolean;
  name: string;
  name_position?: string;
  phone_code?: number;
  state_ids?: number[];
  state_required?: boolean;
  vat_label?: string;
  write_date?: string;
  write_uid?: number | false;
  zip_required?: boolean;
}
