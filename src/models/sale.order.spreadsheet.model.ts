import { BaseModel } from '../BaseModel';
import { SaleOrderSpreadsheet } from '../types/sale.order.spreadsheet';

export class SaleOrderSpreadsheetModel extends BaseModel<SaleOrderSpreadsheet> {
  protected readonly model = 'sale.order.spreadsheet';
}
