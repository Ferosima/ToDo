import {SIZES} from '@constants/styles';
import {TTask} from '@domain/entities/task/types';
import {ViewStyle} from 'react-native';
import {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {GestureHandlerEvent} from 'react-native-reanimated/lib/typescript/reanimated2/hook';

export const useTaskCardAnimationHook = (
  id: TTask['id'],
  onDismiss: (id: TTask['id']) => void,
): [ViewStyle, ViewStyle, (e: GestureHandlerEvent<any>) => void] => {
  const translateX = useSharedValue(0);
  const opacity = useSharedValue(0);

  const panGestureHandler = useAnimatedGestureHandler({
    onActive: event => {
      translateX.value = event.translationX;
      if (event.translationX < -SIZES.WINDOW.WIDTH * 0.25) {
        opacity.value = withTiming(1);
      }
    },
    onEnd: event => {
      if (event.translationX < -SIZES.WINDOW.WIDTH * 0.3) {
        translateX.value = withTiming(-SIZES.WINDOW.WIDTH, undefined, () => {
          runOnJS(onDismiss)(id);
        });
      } else {
        translateX.value = withTiming(0);
        opacity.value = withTiming(0);
      }
    },
  });

  const animatedCardStyle = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value}],
  }));
  const animatedIconStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return [animatedCardStyle, animatedIconStyle, panGestureHandler];
};
