export interface TApplicantGetRefuseReason {
  applicant_emails?: string;
  applicant_ids?: number[];
  applicant_without_email?: string;
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  duplicates?: boolean;
  duplicates_count?: number;
  id?: number;
  refuse_reason_id: number | false;
  send_mail?: boolean;
  single_applicant_email?: string;
  template_id?: number | false;
  write_date?: string;
  write_uid?: number | false;
}
