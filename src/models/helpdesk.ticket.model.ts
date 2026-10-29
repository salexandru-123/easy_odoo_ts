import { BaseModel } from '../BaseModel';
import { HelpdeskTicket } from '../types/helpdesk.ticket';

export class HelpdeskTicketModel extends BaseModel<HelpdeskTicket> {
  protected readonly model = 'helpdesk.ticket';
}
