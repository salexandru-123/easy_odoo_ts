import { BaseModel } from '../BaseModel';
import { CrmTeamMember } from '../types/crm.team.member';

export class CrmTeamMemberModel extends BaseModel<CrmTeamMember> {
  protected readonly model = 'crm.team.member';
}
