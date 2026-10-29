import { BaseModel } from '../BaseModel';
import { KnowledgeInvite } from '../types/knowledge.invite';

export class KnowledgeInviteModel extends BaseModel<KnowledgeInvite> {
  protected readonly model = 'knowledge.invite';
}
