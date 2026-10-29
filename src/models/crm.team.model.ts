import { BaseModel } from '../BaseModel';
import { CrmTeam } from '../types/crm.team';

export class CrmTeamModel extends BaseModel<CrmTeam> {
  protected readonly model = 'crm.team';
}
