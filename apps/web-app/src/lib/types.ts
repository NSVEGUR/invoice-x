export type User = {
  name: string;
  email: string;
  picture: string;
};

export type Invoice = {
  id: string;
  amount: number;
  dueDate: Date;
  recipientId: string;
  recipient: User;
  userId: string;
  user: User;
};

export type Email = {
  subject: string;
  date: string;
  senderName: string;
  senderMail: string;
  body: string;
  hasInvoice: boolean;
};
