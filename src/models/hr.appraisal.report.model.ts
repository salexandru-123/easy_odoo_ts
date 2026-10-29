import { BaseModel } from '../BaseModel';
import { HrAppraisalReport } from '../types/hr.appraisal.report';

export class HrAppraisalReportModel extends BaseModel<HrAppraisalReport> {
  protected readonly model = 'hr.appraisal.report';
}
