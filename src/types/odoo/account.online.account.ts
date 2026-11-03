export interface TAccountOnlineAccount {
  account_data?: string;
  account_number?: string;
  account_online_link_id?: number | false;
  balance?: number;
  company_id?: number | false;
  create_date?: string;
  create_uid?: number | false;
  currency_id?: number | false;
  display_name?: string;
  fetching_status?: string;
  id?: number;
  inverse_balance_sign?: boolean;
  inverse_transaction_sign?: boolean;
  journal_ids?: number[];
  last_sync?: string;
  name?: string;
  online_identifier?: string;
  write_date?: string;
  write_uid?: number | false;
}