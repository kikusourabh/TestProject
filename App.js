import React from 'react';
import UserRegistration from './src/screens/UserRegistration';
import {Provider} from 'react-redux';
import {store} from './src/store/StoreConfig';
import Home from './src/screens/Home';

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
