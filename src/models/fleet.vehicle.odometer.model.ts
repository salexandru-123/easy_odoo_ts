import { BaseModel } from '../BaseModel';
import { FleetVehicleOdometer } from '../types/fleet.vehicle.odometer';

export class FleetVehicleOdometerModel extends BaseModel<FleetVehicleOdometer> {
  protected readonly model = 'fleet.vehicle.odometer';
}
