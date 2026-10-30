export interface TMailAliasDomain {
  bounce_alias: string;
  bounce_email?: string;
  catchall_alias: string;
  catchall_email?: string;
  company_ids?: number[];
  create_date?: string;
  create_uid?: number | false;
  default_from?: string;
  default_from_email?: string;
  display_name?: string;
  id?: number;
  name: string;
  sequence?: number;
  write_date?: string;
  write_uid?: number | false;
}