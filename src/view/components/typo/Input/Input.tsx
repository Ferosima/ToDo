import { useAnimateInput } from "./hooks/useAnimateInput";
import styles from "./styles";
import AnimatedText from "../AnimatedText/AnimatedText";
import Card from "@components/card/BlurCard";
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from "react";
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputProps,
  View
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { FadeIn, FadeOut, Layout } from "react-native-reanimated";

type Props = TextInputProps & { label: string; error?: string };

const Input = forwardRef(
  ({ label, value, onChange, error, style, ...props }: Props, _ref) => {
    const [_value, setValue] = useState(value);
    const ref = useRef<TextInput>(null);
    const [animatedStyle, handleAnimateOnFocus, handleAnimateOnBlur] =
      useAnimateInput();

    useImperativeHandle(_ref, () => ref.current, [ref]);

    useEffect(() => {
      if (value) handleAnimateOnFocus();
      setValue(value);
    }, [value]);

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
      [onChange]
    );

    const handleBlur = () => {
      handleAnimateOnBlur(_value);
    };

    const handleFocus = () => {
      handleAnimateOnFocus();
    };

    return (
      <View style={[style]}>
        <Card style={[styles.wrapper]} onTouchEnd={onPress}>
          <AnimatedText type={"t6"} style={[styles.label, animatedStyle]}>
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

        {error ? (
          <AnimatedText
            type={"t11"}
            color={"danger"}
            entering={FadeIn}
            exiting={FadeOut}
            layout={Layout.delay(100)}
          >
            {error}
          </AnimatedText>
        ) : null}
      </View>
    );
  }
);
export default Input;
