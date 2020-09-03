import {REG, LOG_OUT} from '../Types/RegistrationTypes';

const initalState = {
  isLogin: false,
  user: {},
};

const RegistrationReducer = (state = initalState, action) => {
  switch (action.type) {
    case REG:
      return {
        isLogin: true,
        user: action.user,
      };
    case LOG_OUT:
      return {
        isLogin: false,
        user: {},
      };

    default:
      return state;
  }
};

export default RegistrationReducer;
