import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'relative',
  },
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: -1,
  },
  blur: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 1,
  },
  top: {
    top: 0,
  },
  bottom: {
    bottom: 0,
  },
});
