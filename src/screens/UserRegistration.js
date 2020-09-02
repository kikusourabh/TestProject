import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';
import {Colors} from '../config/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {registerUser} from '../store/actions/RegistrationAction';

function UserRegistration() {
  const user = useSelector((state) => state.user);
  const [dataValid, setDataValid] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    password: '',
  });

  // validation for Email
  // using regular expression
  const checkEmail = (text) => {
    if (/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(text)) {
      setDataValid({
        ...dataValid,
        email: text,
      });
    } else {
      setDataValid({
        ...dataValid,
        email: null,
      });
    }
  };

  const checkName = (text) => {
    if (/^[a-zA-Z ]{4,30}$/.test(text)) {
      setDataValid({
        ...dataValid,
        name: text,
      });
    } else {
      setDataValid({
        ...dataValid,
        name: null,
      });
    }
  };

  const checkPhone = (text) => {
    if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(text)) {
      setDataValid({
        ...dataValid,
        phone: text,
      });
    } else {
      setDataValid({
        ...dataValid,
        phone: null,
      });
    }
  };
  const checkDate = (text) => {
    if (
      /([0-9]{4}[-](0[1-9]|1[0-2])[-]([0-2]{1}[0-9]{1}|3[0-1]{1})|([0-2]{1}[0-9]{1}|3[0-1]{1})[-](0[1-9]|1[0-2])[-][0-9]{4})/.test(
        text,
      )
    ) {
      setDataValid({
        ...dataValid,
        date: text,
      });
    } else {
      setDataValid({
        ...dataValid,
        date: null,
      });
    }
  };
  // validation for password
  // using regular expression
  const checkPassword = (text) => {
    if (
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
        text,
      )
    ) {
      setDataValid({
        ...dataValid,
        password: text,
      });
    } else {
      setDataValid({
        ...dataValid,
        password: null,
      });
    }
  };
  const dispatch = useDispatch();
  const signUp = () => {
    if (
      dataValid != null &&
      dataValid.name != null &&
      dataValid.email != null &&
      dataValid.phone != null &&
      dataValid.date != null &&
      dataValid.password != null
    ) {
      dispatch(registerUser(dataValid));
    } else {
      Alert.alert('Registration', 'input are not valid', [{text: 'OK'}]);
    }
  };

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
              onChangeText={(e) => checkName(e)}
            />
            {dataValid.name != null ? null : (
              <Text style={styles.error}>Name is not valid</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              autoCompleteType="email"
              clearButtonMode="while-editing"
              onChangeText={(e) => checkEmail(e)}
            />
            {dataValid.email != null ? null : (
              <Text style={styles.error}>email is not valid</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Phone"
              keyboardType="phone-pad"
              autoCompleteType="tel"
              clearButtonMode="while-editing"
              onChangeText={(e) => checkPhone(e)}
            />
            {dataValid.phone != null ? null : (
              <Text style={styles.error}>phone is not valid</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Date of birth DD-MM-YYYY"
              keyboardType="numbers-and-punctuation"
              clearButtonMode="while-editing"
              onChangeText={(e) => checkDate(e)}
            />
            {dataValid.date != null ? null : (
              <Text style={styles.error}>date of birth is not valid</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              autoCompleteType="password"
              clearButtonMode="while-editing"
              onChangeText={(e) => checkPassword(e)}
            />
            {dataValid.password != null ? null : (
              <Text style={styles.error}>password is not valid</Text>
            )}
          </View>
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <TouchableOpacity onPress={signUp}>
            <View
              style={{
                height: 56,
                width: '70%',
                borderRadius: 10,
                marginTop: 20,
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
  error: {
    color: Colors.error,
  },
});
