export type User = {
  createdAt: Date;
  dealerAssociation: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
