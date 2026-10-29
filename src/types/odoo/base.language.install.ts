export interface BaseLanguageInstall {
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  first_lang_id?: number | false;
  id?: number;
  lang_ids: number[];
  overwrite?: boolean;
  write_date?: string;
  write_uid?: number | false;
}