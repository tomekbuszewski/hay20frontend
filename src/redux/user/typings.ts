export interface UserReducer {
  username?: string;
  id?: string;
  token?: string;
}

export interface IUserLoginPayload {
  token: string;
  id: number;
  username: string;
}
