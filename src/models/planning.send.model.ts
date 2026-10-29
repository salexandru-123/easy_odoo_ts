import { BaseModel } from '../BaseModel';
import { PlanningSend } from '../types/planning.send';

export class PlanningSendModel extends BaseModel<PlanningSend> {
  protected readonly model = 'planning.send';
}
