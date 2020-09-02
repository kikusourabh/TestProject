import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../config/Colors';

function UserRegistration() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/user.png')}
            style={{height: 100, width: 100}}
          />
        </View>
        <View
          style={{
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '80%',
              backgroundColor: Colors.primaryColor,
              padding: 20,
              borderRadius: 10,
            }}>
            <TextInput
              style={styles.input}
              placeholder="Name"
              keyboardType="name-phone-pad"
              autoCompleteType="name"
              clearButtonMode="while-editing"
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              autoCompleteType="email"
              clearButtonMode="while-editing"
            />
            <TextInput
              style={styles.input}
              placeholder="Phone"
              keyboardType="phone-pad"
              autoCompleteType="tel"
              clearButtonMode="while-editing"
            />
            <TextInput
              style={styles.input}
              placeholder="Date of birth"
              keyboardType="numbers-and-punctuation"
              clearButtonMode="while-editing"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              autoCompleteType="password"
              clearButtonMode="while-editing"
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <TouchableOpacity>
            <View
              style={{
                height: 56,
                width: '70%',
                borderRadius: 10,
                backgroundColor: Colors.primaryDarkColor,
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: Colors.secondaryTextColor,
                }}>
                Sign up
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default UserRegistration;
const styles = StyleSheet.create({
  input: {
    height: 56,
    marginBottom: 4,
    borderStyle: 'solid',
    borderColor: Colors.primaryDarkColor,
  },
});
