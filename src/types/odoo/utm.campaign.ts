export interface TUtmCampaign {
  active?: boolean;
  color?: number;
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  currency_id?: number | false;
  display_name?: string;
  id?: number;
  invoiced_amount?: number;
  is_auto_campaign?: boolean;
  name: string;
  quotation_count?: number;
  stage_id: number | false;
  tag_ids?: number[];
  title: string;
  user_id: number | false;
  write_date?: string;
  write_uid?: number | false;
}
