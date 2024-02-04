import React from 'react';
import {View, ViewProps} from 'react-native';
import styles from './styles';

const Column = (props: ViewProps): JSX.Element => (
  <View {...props} style={[styles.wrapper, props.style]}>
    {props.children}
  </View>
);

export default Column;
