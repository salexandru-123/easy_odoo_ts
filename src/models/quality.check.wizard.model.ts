import { BaseModel } from '../BaseModel';
import { QualityCheckWizard } from '../types/quality.check.wizard';

export class QualityCheckWizardModel extends BaseModel<QualityCheckWizard> {
  protected readonly model = 'quality.check.wizard';
}
