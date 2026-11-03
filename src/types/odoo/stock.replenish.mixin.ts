export interface TStockReplenishMixin {
  allowed_route_ids?: number[];
  bom_id?: number | false;
  route_id?: number | false;
  show_bom?: boolean;
  show_vendor?: boolean;
  supplier_id?: number | false;
}