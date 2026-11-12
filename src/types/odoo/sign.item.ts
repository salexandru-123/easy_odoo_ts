export interface TSignItem {
  alignment: string;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  height: number;
  id?: number;
  name?: string;
  num_options?: number;
  option_ids?: number[];
  page: number;
  posX: number;
  posY: number;
  radio_set_id?: number | false;
  required?: boolean;
  responsible_id?: number | false;
  template_id: number | false;
  transaction_id?: number;
  type_id: number | false;
  width: number;
  write_date?: string;
  write_uid?: number | false;
}
