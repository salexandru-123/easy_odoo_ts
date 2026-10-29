import { BaseModel } from '../BaseModel';
import { FleetVehicleState } from '../types/fleet.vehicle.state';

export class FleetVehicleStateModel extends BaseModel<FleetVehicleState> {
  protected readonly model = 'fleet.vehicle.state';
}
