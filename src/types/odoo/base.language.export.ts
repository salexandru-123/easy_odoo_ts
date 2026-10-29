export interface BaseLanguageExport {
  create_date?: string;
  create_uid?: number | false;
  data?: string | false;
  display_name?: string;
  domain?: string;
  export_type: string;
  format: string;
  id?: number;
  lang: string;
  model_id?: number | false;
  model_name?: string;
  modules?: number[];
  name?: string;
  state?: string;
  write_date?: string;
  write_uid?: number | false;
}