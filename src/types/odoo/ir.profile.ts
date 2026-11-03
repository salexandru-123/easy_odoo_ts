export interface TIrProfile {
  create_date?: string;
  display_name?: string;
  duration?: number;
  entry_count?: number;
  id?: number;
  init_stack_trace?: string;
  name?: string;
  qweb?: string;
  session?: string;
  speedscope?: string | false;
  speedscope_url?: string;
  sql?: string;
  sql_count?: number;
  traces_async?: string;
  traces_sync?: string;
}