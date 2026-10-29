export interface IrModelConstraint {
  create_date?: string;
  create_uid?: number | false;
  definition?: string;
  display_name?: string;
  id?: number;
  message?: string;
  model: number | false;
  module: number | false;
  name: string;
  type: string;
  write_date?: string;
  write_uid?: number | false;
}