export type User = {
  name: string;
  email: string;
  picture: string;
};

export type Invoice = {
  id: number;
  amount: number;
  dueDate: Date;
  recipient: string;
  status: string;
  paidAt: Date;
};

export type Email = {
  subject: string;
  date: string;
  senderName: string;
  senderMail: string;
  body: string;
  hasInvoice: boolean;
};
