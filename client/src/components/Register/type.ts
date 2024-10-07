export interface UserInfoInterface {
  lastname: string;
  firstname: string;
  email: string;
  password: string;
  country_id?: string;
}

export interface RegisterPasswInterface {
  userInfo: UserInfoInterface;
  HandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setSwitchRegister: (state: boolean) => void;
}
