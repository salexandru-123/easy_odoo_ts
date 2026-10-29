export interface BasePartnerMergeAutomaticWizard {
  create_date?: string;
  create_uid?: number | false;
  current_line_id?: number | false;
  display_name?: string;
  dst_partner_id?: number | false;
  exclude_contact?: boolean;
  exclude_journal_item?: boolean;
  group_by_email?: boolean;
  group_by_is_company?: boolean;
  group_by_name?: boolean;
  group_by_parent_id?: boolean;
  group_by_vat?: boolean;
  id?: number;
  line_ids?: number[];
  maximum_group?: number;
  number_group?: number;
  partner_ids?: number[];
  state: string;
  write_date?: string;
  write_uid?: number | false;
}