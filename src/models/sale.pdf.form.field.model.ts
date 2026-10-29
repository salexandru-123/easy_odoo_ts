import { BaseModel } from '../BaseModel';
import { SalePdfFormField } from '../types/sale.pdf.form.field';

export class SalePdfFormFieldModel extends BaseModel<SalePdfFormField> {
  protected readonly model = 'sale.pdf.form.field';
}
