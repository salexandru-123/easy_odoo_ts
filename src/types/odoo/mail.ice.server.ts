export interface TMailIceServer {
  create_date?: string;
  create_uid?: number | false;
  credential?: string;
  display_name?: string;
  id?: number;
  server_type: string;
  uri: string;
  username?: string;
  write_date?: string;
  write_uid?: number | false;
}