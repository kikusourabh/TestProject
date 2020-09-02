import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, ActivityIndicator} from 'react-native';
import UserRegistration from './UserRegistration';
import HomeRoute from '../routes/HomeRoute';

function Home() {
  const isLogin = useSelector((state) => state.isLogin);

  if (isLogin) {
    return <HomeRoute />;
  } else {
    return <UserRegistration />;
  }
}

export default Home;
