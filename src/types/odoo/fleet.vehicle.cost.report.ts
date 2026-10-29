export interface FleetVehicleCostReport {
  company_id?: number | false;
  cost?: number;
  cost_type?: string;
  date_start?: string;
  display_name?: string;
  driver_id?: number | false;
  fuel_type?: string;
  id?: number;
  name?: string;
  vehicle_id?: number | false;
  vehicle_type?: string;
}