import Card from '@components/card/BlurCard';
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputProps,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import AnimatedText from '../AnimatedText/AnimatedText';
import {useAnimateInput} from './hooks/useAnimateInput';
import styles from './styles';

type Props = TextInputProps & {label: string};

const Input = forwardRef(
  ({label, value, onChange, style, ...props}: Props, _ref) => {
    const [_value, setValue] = useState(value);
    const ref = useRef<TextInput>(null);
    const [animatedStyle, handleAnimateOnFocus, handleAnimateOnBlur] =
      useAnimateInput();

    useImperativeHandle(_ref, () => ref.current, [ref]);

    const onPress = useCallback(async () => {
      if (!ref.current?.isFocused()) {
        ref.current?.focus();
      }
    }, []);

    const handleOnChange = useCallback(
      async (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setValue(e.nativeEvent.text);
        onChange?.(e);
      },
      [onChange],
    );

    const handleBlur = () => {
      handleAnimateOnBlur(_value);
    };

    const handleFocus = () => {
      handleAnimateOnFocus();
    };

    return (
      <Card style={[styles.wrapper, style]} onTouchEnd={onPress}>
        <AnimatedText type={'t6'} style={[styles.label, animatedStyle]}>
          {label}
        </AnimatedText>

        <TextInput
          {...props}
          ref={ref}
          value={_value}
          onChange={handleOnChange}
          style={[styles.input]}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </Card>
    );
  },
);
export default Input;
