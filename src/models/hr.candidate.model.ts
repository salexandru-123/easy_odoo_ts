import { BaseModel } from '../BaseModel';
import { HrCandidate } from '../types/hr.candidate';

export class HrCandidateModel extends BaseModel<HrCandidate> {
  protected readonly model = 'hr.candidate';
}
