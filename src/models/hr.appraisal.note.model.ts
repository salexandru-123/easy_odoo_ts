import { BaseModel } from '../BaseModel';
import { HrAppraisalNote } from '../types/hr.appraisal.note';

export class HrAppraisalNoteModel extends BaseModel<HrAppraisalNote> {
  protected readonly model = 'hr.appraisal.note';
}
