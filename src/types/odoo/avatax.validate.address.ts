export interface TAvataxValidateAddress {
  city?: string;
  country_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  is_already_valid?: boolean;
  partner_id: number | false;
  state_id?: number | false;
  street?: string;
  street2?: string;
  validated_city?: string;
  validated_country_id?: number | false;
  validated_latitude?: number;
  validated_longitude?: number;
  validated_state_id?: number | false;
  validated_street?: string;
  validated_street2?: string;
  validated_zip?: string;
  write_date?: string;
  write_uid?: number | false;
  zip?: string;
}
