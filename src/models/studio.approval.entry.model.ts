import { BaseModel } from '../BaseModel';
import { StudioApprovalEntry } from '../types/studio.approval.entry';

export class StudioApprovalEntryModel extends BaseModel<StudioApprovalEntry> {
  protected readonly model = 'studio.approval.entry';
}
