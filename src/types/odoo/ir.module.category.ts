export interface IrModuleCategory {
  child_ids?: number[];
  create_date?: string;
  create_uid?: number | false;
  description?: string;
  display_name?: string;
  exclusive?: boolean;
  id?: number;
  module_ids?: number[];
  name: string;
  parent_id?: number | false;
  sequence?: number;
  visible?: boolean;
  write_date?: string;
  write_uid?: number | false;
  xml_id?: string;
}