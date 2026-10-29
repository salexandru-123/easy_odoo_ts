import { BaseModel } from '../BaseModel';
import { KnowledgeCover } from '../types/knowledge.cover';

export class KnowledgeCoverModel extends BaseModel<KnowledgeCover> {
  protected readonly model = 'knowledge.cover';
}
