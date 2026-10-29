export interface PlanningRole {
  active?: boolean;
  color?: number;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  name: string;
  product_ids?: number[];
  resource_ids?: number[];
  sequence?: number;
  slot_properties_definition?: unknown;
  write_date?: string;
  write_uid?: number | false;
}