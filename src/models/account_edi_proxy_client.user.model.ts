import { BaseModel } from '../BaseModel';
import { AccountEdiProxyClientUser } from '../types/odoo/account_edi_proxy_client.user';

export class AccountEdiProxyClientUserModel extends BaseModel<AccountEdiProxyClientUser> {
  protected readonly model = 'account_edi_proxy_client.user';
}
