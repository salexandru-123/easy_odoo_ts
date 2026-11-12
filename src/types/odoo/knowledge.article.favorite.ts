export interface TKnowledgeArticleFavorite {
  article_id: number | false;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  is_article_active?: boolean;
  sequence?: number;
  user_id: number | false;
  write_date?: string;
  write_uid?: number | false;
}
