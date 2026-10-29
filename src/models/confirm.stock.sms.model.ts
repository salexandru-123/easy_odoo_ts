import { BaseModel } from '../BaseModel';
import { ConfirmStockSms } from '../types/confirm.stock.sms';

export class ConfirmStockSmsModel extends BaseModel<ConfirmStockSms> {
  protected readonly model = 'confirm.stock.sms';
}
