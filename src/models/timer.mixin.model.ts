import { BaseModel } from '../BaseModel';
import { TimerMixin } from '../types/timer.mixin';

export class TimerMixinModel extends BaseModel<TimerMixin> {
  protected readonly model = 'timer.mixin';
}
