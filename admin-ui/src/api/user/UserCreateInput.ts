export type UserCreateInput = {
  dealerAssociation?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
};
