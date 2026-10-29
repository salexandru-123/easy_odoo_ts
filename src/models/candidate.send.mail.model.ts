import { BaseModel } from '../BaseModel';
import { CandidateSendMail } from '../types/candidate.send.mail';

export class CandidateSendMailModel extends BaseModel<CandidateSendMail> {
  protected readonly model = 'candidate.send.mail';
}
