import { BaseModel } from '../BaseModel';
import { OnboardingProgress } from '../types/onboarding.progress';

export class OnboardingProgressModel extends BaseModel<OnboardingProgress> {
  protected readonly model = 'onboarding.progress';
}
