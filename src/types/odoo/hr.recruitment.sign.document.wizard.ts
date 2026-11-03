export interface THrRecruitmentSignDocumentWizard {
  applicant_id?: number | false;
  applicant_role_id: number | false;
  attachment_ids?: number[];
  cc_partner_ids?: number[];
  create_date?: string;
  create_uid?: number | false;
  display_name?: string;
  has_both_template?: boolean;
  id?: number;
  message?: string;
  partner_id?: number | false;
  partner_name?: string;
  possible_template_ids?: number[];
  responsible_id?: number | false;
  sign_template_ids: number[];
  sign_template_responsible_ids?: number[];
  subject: string;
  template_warning?: string;
  write_date?: string;
  write_uid?: number | false;
}