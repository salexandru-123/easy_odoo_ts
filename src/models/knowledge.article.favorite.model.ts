import { BaseModel } from '../BaseModel';
import { KnowledgeArticleFavorite } from '../types/knowledge.article.favorite';

export class KnowledgeArticleFavoriteModel extends BaseModel<KnowledgeArticleFavorite> {
  protected readonly model = 'knowledge.article.favorite';
}
