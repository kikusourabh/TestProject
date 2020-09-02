import {IS_LOGIN, REG} from '../Types/RegistrationTypes';

export const isLogin = () => ({
  type: IS_LOGIN,
});
export const registerUser = (user) => ({
  type: REG,
  user: user,
});
