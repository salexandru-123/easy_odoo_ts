import { BaseModel } from '../BaseModel';
import { DiscussChannelMember } from '../types/discuss.channel.member';

export class DiscussChannelMemberModel extends BaseModel<DiscussChannelMember> {
  protected readonly model = 'discuss.channel.member';
}
