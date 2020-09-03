import {combineReducers, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import RegistrationReducer from './reduces/RegistrationReducer';
import HomeListReducer from './reduces/HomeListReducer';
import Astorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: Astorage,
};

const rootReducer = combineReducers({
  register: RegistrationReducer,
  homeList: HomeListReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
const persistStor = persistStore(store);
export {store, persistStor};
