import {COLORS} from '@constants/styles';
import {useCallback} from 'react';
import {ViewStyle} from 'react-native';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export const useAnimateInput = (): [
  ViewStyle,
  () => void,
  (value: string | undefined) => void,
] => {
  const translateY = useSharedValue(10);
  const fontSize = useSharedValue(16);
  const color = useSharedValue(COLORS.black);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateY: translateY.value}],
    fontSize: fontSize.value,
    color: color.value,
  }));

  const handleAnimateOnFocus = useCallback(() => {
    translateY.value = withTiming(0);
    fontSize.value = withTiming(14);
    color.value = withTiming(COLORS.gray1);
  }, [color, fontSize, translateY]);

  const handleAnimateOnBlur = useCallback(
    (value: string | undefined) => {
      if (!value) {
        translateY.value = withTiming(10);
        fontSize.value = withTiming(16);
        color.value = withTiming(COLORS.black);
      }
    },
    [color, fontSize, translateY],
  );

  return [animatedStyle, handleAnimateOnFocus, handleAnimateOnBlur];
};
