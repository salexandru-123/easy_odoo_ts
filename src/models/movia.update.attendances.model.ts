import { BaseModel } from '../BaseModel';
import { MoviaUpdateAttendances } from '../types/movia.update.attendances';

export class MoviaUpdateAttendancesModel extends BaseModel<MoviaUpdateAttendances> {
  protected readonly model = 'movia.update.attendances';
}
