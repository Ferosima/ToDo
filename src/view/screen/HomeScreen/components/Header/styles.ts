import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 16,
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 2,
  },
  row: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
});
