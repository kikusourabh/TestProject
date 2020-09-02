import {IS_LOGIN, REG} from '../Types/RegistrationTypes';

const initalState = {
  isLogin: false,
  user: {},
};

const RegistrationReducer = (state = initalState, action) => {
  switch (action.type) {
    case IS_LOGIN:
      return state.isLogin;
    case REG:
      return {
        isLogin: true,
        user: action.user,
      };
    default:
      return state;
  }
};

export default RegistrationReducer;
