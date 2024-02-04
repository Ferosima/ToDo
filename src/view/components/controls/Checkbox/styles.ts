import {COLORS} from '@constants/styles';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    height: 24,
    width: 24,
    borderWidth: 1.5,
    borderColor: COLORS.blueGray,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  box: {
    height: 18,
    width: 18,
    borderRadius: 9,
    backgroundColor: COLORS.main,
  },
});
