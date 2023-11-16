export type User = {
  name: string;
  email: string;
  picture: string;
};

export type Invoice = {
  amount: number;
  dueDate: Date;
  recipientId: string;
  recipient: User;
  userId: string;
  user: User;
};