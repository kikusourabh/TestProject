import {StyleSheet} from 'react-native';
import {Colors} from './Colors';

export const Styles = StyleSheet.create({
  PrimaryText: {
    color: Colors.primaryTextColor,
    fontSize: 14,
  },
  SecondaryText: {
    color: Colors.secondaryTextColor,
    fontSize: 14,
  },
  ErrorMsg: {
    color: Colors.error,
    marginStart: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
});
