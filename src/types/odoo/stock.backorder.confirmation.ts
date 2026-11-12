export interface TStockBackorderConfirmation {
  backorder_confirmation_line_ids?: number[];
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  empty_move_count?: number;
  id?: number;
  partial_move_count?: number;
  pick_ids?: number[];
  show_transfers?: boolean;
  write_date?: string;
  write_uid?: number | false;
}
