import React from 'react';
import {View, Text, Button} from 'react-native';
import {signOut} from '../store/actions/RegistrationAction';
import {useDispatch} from 'react-redux';

function UserDetails() {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(signOut());
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="Sign out" onPress={logOut} />
    </View>
  );
}

export default UserDetails;
