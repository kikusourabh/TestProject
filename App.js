import React from 'react';
import UserRegistration from './src/screens/UserRegistration';
import {Provider} from 'react-redux';
import {store, persistStor} from './src/store/StoreConfig';
import Home from './src/screens/Home';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStor}>
        <Home />
      </PersistGate>
    </Provider>
  );
};

export default App;
