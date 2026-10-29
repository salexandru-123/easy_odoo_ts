import { BaseModel } from '../BaseModel';
import { MaintenanceMixin } from '../types/maintenance.mixin';

export class MaintenanceMixinModel extends BaseModel<MaintenanceMixin> {
  protected readonly model = 'maintenance.mixin';
}
