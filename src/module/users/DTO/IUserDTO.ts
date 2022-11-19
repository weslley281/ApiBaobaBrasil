interface ICreateUserDTO {
  user_id?: number;
  name: string;
  phone: string;
  email: string;
  birthday: string;
  status: boolean;
  admin: boolean;
  encryptedpassword: string;
}

export { ICreateUserDTO };
