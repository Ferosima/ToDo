import {FONT_FAMILY} from '@constants/styles';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  input: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 16,
  },
  wrapper: {
    flexDirection: 'column',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 8,
    paddingHorizontal: 12,
  },
  label: {flexShrink: 0},
});
