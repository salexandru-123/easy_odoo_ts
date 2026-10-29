import { BaseModel } from '../BaseModel';
import { HrSalaryAttachment } from '../types/hr.salary.attachment';

export class HrSalaryAttachmentModel extends BaseModel<HrSalaryAttachment> {
  protected readonly model = 'hr.salary.attachment';
}
