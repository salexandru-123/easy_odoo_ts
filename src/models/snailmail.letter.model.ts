import { BaseModel } from '../BaseModel';
import { SnailmailLetter } from '../types/snailmail.letter';

export class SnailmailLetterModel extends BaseModel<SnailmailLetter> {
  protected readonly model = 'snailmail.letter';
}
