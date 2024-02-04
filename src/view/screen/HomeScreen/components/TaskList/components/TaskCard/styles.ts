import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    marginVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginBottom: 4,
    flexShrink: 1,
  },
  checkbox: {
    marginRight: 12,
  },
  icon: {
    position: 'absolute',
    right: 30,
    margin: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    zIndex: -1,
  },
  disabled: {
    textDecorationLine: 'line-through',
  },
});
