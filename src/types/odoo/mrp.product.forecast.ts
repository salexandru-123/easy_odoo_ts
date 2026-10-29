export interface MrpProductForecast {
  create_date?: string;
  create_uid?: number | false;
  date: string;
  display_name?: string;
  forecast_qty?: number;
  id?: number;
  procurement_launched?: boolean;
  production_schedule_id: number | false;
  replenish_qty?: number;
  replenish_qty_updated?: boolean;
  write_date?: string;
  write_uid?: number | false;
}