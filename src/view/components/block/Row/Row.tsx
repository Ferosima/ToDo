import styles from './styles';
import React from 'react';
import {View, ViewProps} from 'react-native';

const Row = (props: ViewProps): JSX.Element => (
  <View {...props} style={[styles.wrapper, props.style]}>
    {props.children}
  </View>
);

export default Row;
