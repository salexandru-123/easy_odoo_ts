import { BaseModel } from '../BaseModel';
import { SignTemplate } from '../types/sign.template';

export class SignTemplateModel extends BaseModel<SignTemplate> {
  protected readonly model = 'sign.template';
}
