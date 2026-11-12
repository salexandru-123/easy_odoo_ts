export interface TKnowledgeArticleMember {
  article_id: number | false;
  article_permission?: string;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  partner_id: number | false;
  permission: string;
  write_date?: string;
  write_uid?: number | false;
}
