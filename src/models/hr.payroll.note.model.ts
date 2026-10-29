import { BaseModel } from '../BaseModel';
import { HrPayrollNote } from '../types/hr.payroll.note';

export class HrPayrollNoteModel extends BaseModel<HrPayrollNote> {
  protected readonly model = 'hr.payroll.note';
}
