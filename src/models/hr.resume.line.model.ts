import { BaseModel } from '../BaseModel';
import { HrResumeLine } from '../types/hr.resume.line';

export class HrResumeLineModel extends BaseModel<HrResumeLine> {
  protected readonly model = 'hr.resume.line';
}
