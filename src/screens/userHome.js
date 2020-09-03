import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
  Image,
} from 'react-native';
import {
  _STATE_LOADING,
  _STATE_SUCCESS,
  _STATE_FAIL,
  fetchingData,
  fetchingDataSuccess,
  fetchingDataFail,
  searchData,
} from '../store/actions/HomeListAction';
import Axios from 'axios';

import {useSelector, useDispatch} from 'react-redux';
import {Styles} from '../config/Styles';
import {Colors} from '../config/Colors';
import {
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native-gesture-handler';

function userHome({navigation}) {
  const dispatch = useDispatch();
  const navigateToDetails = () => {
    navigation.navigate('details');
  };

  const payload = useSelector((state) => state.homeList.payload);
  const data = useSelector((state) => state.homeList.searchData);

  const Search = (text) => {
    dispatch(searchData(text));
  };
  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchingData());
      Axios.get(
        'https://raw.githubusercontent.com/kikusourabh/QuotesStore/master/Quotes/QuotesList.json',
      )
        .then((res) => {
          // console.log('====================================');
          // console.log(res.data);
          // console.log('====================================');
          dispatch(fetchingDataSuccess(res.data));
        })
        .catch((err) => {
          dispatch(fetchingDataFail());
        });
    };
    fetchData();
  }, []);

  const QuotesItemSeparator = () => {
    return <View style={{height: 16}} />;
  };

  const QuotesItem = ({item}) => {
    return (
      <View>
        <View style={{flex: 3, flexDirection: 'row'}}>
          <Image style={{height: 56, width: 56}} source={{uri: item.img}} />
          <Text
            style={{
              paddingStart: 16,
              justifyContent: 'center',
              alignSelf: 'center',
            }}
            numberOfLines={4}>
            {item.text}
          </Text>
        </View>
      </View>
    );
  };

  if (payload == _STATE_LOADING) {
    console.log('====================================');
    console.log('data: ' + data);
    console.log('====================================');
    return (
      <View style={{flex: 1}}>
        <View style={{height: 20, backgroundColor: Colors.primaryColor}} />
        <View
          style={{
            height: 80,
            backgroundColor: Colors.primaryColor,
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              marginStart: 16,
            }}>
            <Text
              style={[Styles.PrimaryText, {fontSize: 20, fontWeight: 'bold'}]}>
              Home
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
            <TouchableOpacity onPress={navigateToDetails}>
              <Text
                style={[
                  Styles.SecondaryText,
                  {color: Colors.secondaryDarkColor},
                ]}>
                Details
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" color={Colors.primaryDarkColor} />
          <Text
            style={[
              Styles.PrimaryText,
              {marginTop: 10, fontSize: 20, fontWeight: 'bold'},
            ]}>
            Wait for a while
          </Text>
        </View>
      </View>
    );
  } else if (payload == _STATE_SUCCESS) {
    return (
      <View style={{flex: 1}}>
        <View>
          <View style={{height: 20, backgroundColor: Colors.primaryColor}} />
          <View
            style={{
              height: 80,
              backgroundColor: Colors.primaryColor,
              flexDirection: 'row',
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                marginStart: 16,
              }}>
              <Text
                style={[
                  Styles.PrimaryText,
                  {fontSize: 20, fontWeight: 'bold'},
                ]}>
                Home
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
              <TouchableOpacity onPress={navigateToDetails}>
                <Text
                  style={[
                    Styles.SecondaryText,
                    {color: Colors.secondaryDarkColor},
                  ]}>
                  Details
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <TextInput
            style={{
              height: 56,
              paddingStart: 16,
            }}
            placeholder="search"
            onChangeText={(e) => Search(e)}
          />
          <FlatList
            style={{padding: 16, marginBottom: 10}}
            data={data}
            keyExtractor={({key}) => key.toString()}
            renderItem={QuotesItem}
            ItemSeparatorComponent={QuotesItemSeparator}
          />
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <Text>Faild</Text>
      </View>
    );
  }
}

export default userHome;
