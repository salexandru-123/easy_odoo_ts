export interface TKnowledgeInvite {
  article_id: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  have_share_partners?: boolean;
  id?: number;
  message?: string;
  partner_ids: number[];
  permission: string;
  write_date?: string;
  write_uid?: number | false;
}
