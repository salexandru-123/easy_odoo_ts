import { BaseModel } from '../BaseModel';
import { KnowledgeArticleMember } from '../types/knowledge.article.member';

export class KnowledgeArticleMemberModel extends BaseModel<KnowledgeArticleMember> {
  protected readonly model = 'knowledge.article.member';
}
