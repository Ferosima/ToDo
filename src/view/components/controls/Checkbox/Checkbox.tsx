import {COLORS} from '@constants/styles';
import React, {useCallback, useEffect, useState} from 'react';
import {TouchableOpacity, View, ViewProps} from 'react-native';
import RNReactNativeHapticFeedback from 'react-native-haptic-feedback';
import styles from './styles';

type Props = ViewProps & {
  color?: string;
  checked: boolean;
  onChange?: (checked: Props['checked']) => void;
};

const Checkbox: React.FC<Props> = ({color, ...props}: Props) => {
  const [checked, setChecked] = useState<Props['checked']>(props.checked);

  useEffect(() => {
    setChecked(props.checked);
  }, [props.checked]);

  const onPress = useCallback(() => {
    const _checked = !checked;
    setChecked(_checked);
    RNReactNativeHapticFeedback.trigger('impactLight');
    if (props.onChange) {
      props.onChange(_checked);
    }
  }, [checked, props]);

  return (
    <TouchableOpacity
      hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
      activeOpacity={1}
      style={[
        props.style,
        styles.wrapper,
        checked ? {borderColor: color} : null,
      ]}
      onPress={onPress}>
      {checked ? <View style={[styles.box, {backgroundColor: color}]} /> : null}
    </TouchableOpacity>
  );
};

Checkbox.defaultProps = {
  color: COLORS.main,
};

export default Checkbox;
