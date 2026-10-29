import { BaseModel } from '../BaseModel';
import { HelpdeskTeam } from '../types/helpdesk.team';

export class HelpdeskTeamModel extends BaseModel<HelpdeskTeam> {
  protected readonly model = 'helpdesk.team';
}
