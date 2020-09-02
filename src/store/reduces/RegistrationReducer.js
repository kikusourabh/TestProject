import {IS_LOGIN} from '../Types/RegistrationTypes';

const initalState = {
  isLogin: false,
};

export const RegistrationReducer = (state = initalState, action) => {
  switch (action.type) {
    case IS_LOGIN:
      return state.isLogin;

    default:
      return state;
  }
};
