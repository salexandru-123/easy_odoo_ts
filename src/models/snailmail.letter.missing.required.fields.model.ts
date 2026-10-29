import { BaseModel } from '../BaseModel';
import { SnailmailLetterMissingRequiredFields } from '../types/snailmail.letter.missing.required.fields';

export class SnailmailLetterMissingRequiredFieldsModel extends BaseModel<SnailmailLetterMissingRequiredFields> {
  protected readonly model = 'snailmail.letter.missing.required.fields';
}
