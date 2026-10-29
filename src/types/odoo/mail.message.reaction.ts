export interface MailMessageReaction {
  content: string;
  display_name?: string;
  guest_id?: number | false;
  id?: number;
  message_id: number | false;
  partner_id?: number | false;
}