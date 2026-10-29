import { BaseModel } from '../BaseModel';
import { DiscussChannel } from '../types/discuss.channel';

export class DiscussChannelModel extends BaseModel<DiscussChannel> {
  protected readonly model = 'discuss.channel';
}
