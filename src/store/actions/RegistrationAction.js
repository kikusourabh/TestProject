import {REG, LOG_OUT} from '../Types/RegistrationTypes';

export const registerUser = (user) => ({
  type: REG,
  user: user,
});
export const signOut = () => ({
  type: LOG_OUT,
});
