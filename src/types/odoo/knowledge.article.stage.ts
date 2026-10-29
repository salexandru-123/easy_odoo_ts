export interface KnowledgeArticleStage {
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  fold?: boolean;
  id?: number;
  name: string;
  parent_id: number | false;
  sequence?: number;
  write_date?: string;
  write_uid?: number | false;
}