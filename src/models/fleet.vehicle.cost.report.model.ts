import { BaseModel } from '../BaseModel';
import { FleetVehicleCostReport } from '../types/fleet.vehicle.cost.report';

export class FleetVehicleCostReportModel extends BaseModel<FleetVehicleCostReport> {
  protected readonly model = 'fleet.vehicle.cost.report';
}
