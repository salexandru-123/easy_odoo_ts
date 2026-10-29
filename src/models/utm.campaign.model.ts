import { BaseModel } from '../BaseModel';
import { UtmCampaign } from '../types/utm.campaign';

export class UtmCampaignModel extends BaseModel<UtmCampaign> {
  protected readonly model = 'utm.campaign';
}
