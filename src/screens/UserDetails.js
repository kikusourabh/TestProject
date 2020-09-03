import React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import {signOut} from '../store/actions/RegistrationAction';
import {useDispatch, useSelector} from 'react-redux';
import {Colors} from '../config/Colors';
import {Styles} from '../config/Styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

function UserDetails() {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.register.user);
  const logOut = () => {
    dispatch(signOut());
  };
  return (
    <View style={{flex: 1}}>
      <View style={{height: 20, backgroundColor: Colors.primaryColor}} />
      <View
        style={{
          flexDirection: 'row',
          height: 80,
          paddingTop: 20,
          backgroundColor: Colors.primaryColor,
        }}>
        <View style={{flex: 1, marginStart: 16, justifyContent: 'center'}}>
          <Text
            style={[Styles.PrimaryText, {fontSize: 20, fontWeight: 'bold'}]}>
            User details
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            marginStart: 16,
            justifyContent: 'center',
            alignItems: 'flex-end',
            paddingEnd: 16,
          }}>
          <TouchableOpacity onPress={logOut}>
            <Text
              style={[
                Styles.SecondaryText,
                {color: Colors.secondaryDarkColor},
              ]}>
              Sign out
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.primaryDarkColor,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{height: 100, width: 100}}
            source={require('../assets/user.png')}
          />
        </View>
        <View
          style={{
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{width: '70%'}}>
            <View>
              <View style={styles.constainer}>
                <Text style={[Styles.PrimaryText, styles.contentText]}>
                  {userDetails.name}
                </Text>
              </View>
              <Text style={styles.constianerTitle}>Name</Text>
            </View>
            <View>
              <View style={styles.constainer}>
                <Text style={[Styles.PrimaryText, styles.contentText]}>
                  {userDetails.email}
                </Text>
              </View>
              <Text style={styles.constianerTitle}>Email</Text>
            </View>
            <View>
              <View style={styles.constainer}>
                <Text style={[Styles.PrimaryText, styles.contentText]}>
                  {userDetails.phone}
                </Text>
              </View>
              <Text style={styles.constianerTitle}>Phone</Text>
            </View>
            <View>
              <View style={styles.constainer}>
                <Text style={[Styles.PrimaryText, styles.contentText]}>
                  {userDetails.date}
                </Text>
              </View>
              <Text style={styles.constianerTitle}>Date of birth</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default UserDetails;

const styles = StyleSheet.create({
  constianerTitle: {
    fontSize: 20,
    position: 'absolute',
    marginStart: 16,
    backgroundColor: Colors.white,
  },
  contentText: {fontSize: 18},
  constainer: {
    height: 56,
    marginTop: 12,
    borderWidth: 1,
    borderStyle: 'solid',
    justifyContent: 'center',
    paddingStart: 16,
    borderRadius: 10,
    marginBottom: 10,
  },
});
