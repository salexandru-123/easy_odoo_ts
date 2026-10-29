import { BaseModel } from '../BaseModel';
import { FleetVehicleLogContract } from '../types/fleet.vehicle.log.contract';

export class FleetVehicleLogContractModel extends BaseModel<FleetVehicleLogContract> {
  protected readonly model = 'fleet.vehicle.log.contract';
}
