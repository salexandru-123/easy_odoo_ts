export interface ChangePasswordUser {
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  id?: number;
  new_passwd?: string;
  user_id: number | false;
  user_login?: string;
  wizard_id: number | false;
  write_date?: string;
  write_uid?: number | false;
}