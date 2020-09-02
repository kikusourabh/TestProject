import {combineReducers, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import RegistrationReducer from './reduces/RegistrationReducer';

const rootReducer = combineReducers({
  RegistrationReducer,
});
const store = createStore(rootReducer);
export {store};
