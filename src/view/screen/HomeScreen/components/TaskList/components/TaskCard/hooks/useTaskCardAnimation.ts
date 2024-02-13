import { COLORS, SIZES } from "@constants/styles";
import { ITaskEntity } from "@domain/entities/task/types";

import { ViewStyle } from "react-native";
import {
  interpolateColor,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated";
import { GestureHandlerEvent } from "react-native-reanimated/lib/typescript/reanimated2/hook";

export const useTaskCardAnimationHook = (
  id: ITaskEntity["id"],
  onDismiss: (id: ITaskEntity["id"]) => void
): [ViewStyle, ViewStyle, ViewStyle, (e: GestureHandlerEvent<any>) => void] => {
  const translateX = useSharedValue(0);
  const opacity = useSharedValue(0);
  const color = useSharedValue(0);

  const panGestureHandler = useAnimatedGestureHandler({
    onActive: (event) => {
      translateX.value = event.translationX;

      if (
        event.translationX < 0 &&
        event.translationX > -SIZES.WINDOW.WIDTH * 0.25
      ) {
        color.value = withTiming(
          event.translationX / (-SIZES.WINDOW.WIDTH * 0.25)
        );
      }

      if (event.translationX < -SIZES.WINDOW.WIDTH * 0.25) {
        opacity.value = withTiming(1);
        color.value = withTiming(1);
      }
    },
    onEnd: (event) => {
      if (event.translationX < -SIZES.WINDOW.WIDTH * 0.3) {
        translateX.value = withTiming(-SIZES.WINDOW.WIDTH, undefined, () => {
          runOnJS(onDismiss)(id);
        });
      } else {
        translateX.value = withTiming(0);
        opacity.value = withTiming(0);
        color.value = withTiming(0);
      }
    }
  });
  const animatedWrapperStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      color.value,
      [0, 1],
      ["transparent", COLORS.dangerLight]
    )
  }));
  const animatedCardStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }]
  }));
  const animatedIconStyle = useAnimatedStyle(() => ({
    opacity: opacity.value
  }));

  return [
    animatedWrapperStyle,
    animatedCardStyle,
    animatedIconStyle,
    panGestureHandler
  ];
};
