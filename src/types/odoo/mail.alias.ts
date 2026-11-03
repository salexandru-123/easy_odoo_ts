export interface TMailAlias {
  alias_bounced_content?: string;
  alias_contact: string;
  alias_defaults: string;
  alias_domain?: string;
  alias_domain_id?: number | false;
  alias_force_thread_id?: number;
  alias_full_name?: string;
  alias_incoming_local?: boolean;
  alias_model_id: number | false;
  alias_name?: string;
  alias_parent_model_id?: number | false;
  alias_parent_thread_id?: number;
  alias_status?: string;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  write_date?: string;
  write_uid?: number | false;
}