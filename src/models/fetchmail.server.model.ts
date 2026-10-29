import { BaseModel } from '../BaseModel';
import { FetchmailServer } from '../types/fetchmail.server';

export class FetchmailServerModel extends BaseModel<FetchmailServer> {
  protected readonly model = 'fetchmail.server';
}
