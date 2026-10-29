import { BaseModel } from '../BaseModel';
import { IrAttachment } from '../types/ir.attachment';

export class IrAttachmentModel extends BaseModel<IrAttachment> {
  protected readonly model = 'ir.attachment';
}
