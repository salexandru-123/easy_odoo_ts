import { BaseModel } from '../BaseModel';
import { SnailmailLetterFormatError } from '../types/snailmail.letter.format.error';

export class SnailmailLetterFormatErrorModel extends BaseModel<SnailmailLetterFormatError> {
  protected readonly model = 'snailmail.letter.format.error';
}
