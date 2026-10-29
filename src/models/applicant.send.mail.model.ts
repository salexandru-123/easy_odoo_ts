import { BaseModel } from '../BaseModel';
import { ApplicantSendMail } from '../types/applicant.send.mail';

export class ApplicantSendMailModel extends BaseModel<ApplicantSendMail> {
  protected readonly model = 'applicant.send.mail';
}
