import { BaseModel } from '../BaseModel';
import { MailGatewayAllowed } from '../types/mail.gateway.allowed';

export class MailGatewayAllowedModel extends BaseModel<MailGatewayAllowed> {
  protected readonly model = 'mail.gateway.allowed';
}
