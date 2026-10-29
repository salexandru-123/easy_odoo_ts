export interface BaseImportModule {
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  force?: boolean;
  id?: number;
  import_message?: string;
  module_file: string | false;
  modules_dependencies?: string;
  state?: string;
  with_demo?: boolean;
  write_date?: string;
  write_uid?: number | false;
}