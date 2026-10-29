import { BaseModel } from '../BaseModel';
import { OnboardingProgressStep } from '../types/onboarding.progress.step';

export class OnboardingProgressStepModel extends BaseModel<OnboardingProgressStep> {
  protected readonly model = 'onboarding.progress.step';
}
