import { BaseModel } from '../BaseModel';
import { FleetVehicle } from '../types/fleet.vehicle';

export class FleetVehicleModel extends BaseModel<FleetVehicle> {
  protected readonly model = 'fleet.vehicle';
}
