import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  checkbox: {
    marginRight: 12,
  },
  disabled: {
    textDecorationLine: 'line-through',
  },
  icon: {
    bottom: 0,
    justifyContent: 'center',
    margin: 0,
    position: 'absolute',
    right: 30,
    top: 0,
    zIndex: -1,
  },
  label: {
    flexShrink: 1,
    marginBottom: 4,
  },
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 4,
  },
});
