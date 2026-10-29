import { BaseModel } from '../BaseModel';
import { KnowledgeArticle } from '../types/knowledge.article';

export class KnowledgeArticleModel extends BaseModel<KnowledgeArticle> {
  protected readonly model = 'knowledge.article';
}
