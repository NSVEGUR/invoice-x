export interface ExtendedUser extends Express.User {
  _json: any;
}

export type Email = {
  subject: string;
  date: string;
  senderName: string;
  senderMail: string;
  body: string;
  hasInvoice: boolean;
};
