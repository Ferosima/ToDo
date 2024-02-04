import React, {forwardRef} from 'react';
import {Text as RNText, TextProps} from 'react-native';
import styles from './styles';
import {COLORS} from '@constants/styles';

type Props = TextProps & {
  type: keyof typeof styles;
  color?: keyof typeof COLORS;
};

const Text: React.FunctionComponent<Props> = forwardRef<RNText, Props>(
  ({color = 'black', ...props}, ref) => (
    <RNText
      {...props}
      ref={ref}
      style={[
        styles[props.type],
        {color: COLORS[color], flexShrink: 1},
        props.style,
      ]}
    />
  ),
);

export default Text;
