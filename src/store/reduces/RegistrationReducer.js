import {IS_LOGIN, REG} from '../Types/RegistrationTypes';

const initalState = {
  isLogin: false,
  user: {},
};

export const RegistrationReducer = (state = initalState, action) => {
  switch (action.type) {
    case IS_LOGIN:
      return state.isLogin;
    case REG:
      return {
        ...state,
        isLogin: true,
        user: action.user,
      };
    default:
      return state;
  }
};
