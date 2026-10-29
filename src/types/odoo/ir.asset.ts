export interface IrAsset {
  active?: boolean;
  bundle: string;
  create_date?: string;
  create_uid?: number | false;
  directive?: string;
  display_name?: string;
  id?: number;
  name: string;
  path: string;
  sequence: number;
  target?: string;
  write_date?: string;
  write_uid?: number | false;
}