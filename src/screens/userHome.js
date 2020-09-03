import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Colors from '../config/Colors';
function userHome({navigation}) {
  const navigateToDetails = () => {
    navigation.navigate('details');
  };
  return (
    // https://raw.githubusercontent.com/kikusourabh/QuotesStore/master/Quotes/QuotesList.json
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home</Text>
      <Button title="details" onPress={navigateToDetails}></Button>
    </View>
  );
}

export default userHome;
