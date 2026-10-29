import { BaseModel } from '../BaseModel';
import { TimerTimer } from '../types/timer.timer';

export class TimerTimerModel extends BaseModel<TimerTimer> {
  protected readonly model = 'timer.timer';
}
