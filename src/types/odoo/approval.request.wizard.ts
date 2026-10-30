export interface TApprovalRequestWizard {
  category_id: number | false;
  create_date?: string;
  create_uid?: number | false;
  description?: string;
  destination_location_id?: number | false;
  display_name?: string;
  id?: number;
  requester: number | false;
  write_date?: string;
  write_uid?: number | false;
}