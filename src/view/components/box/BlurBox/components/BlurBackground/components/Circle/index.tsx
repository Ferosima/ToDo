import { Circle, CircleProps } from "@shopify/react-native-skia";
import React, { useEffect, useRef } from "react";
import {
  interpolateColor,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming
} from "react-native-reanimated";

const BlurCircleColors = [
  "#D6D9FA",
  "#D6F9EE",
  "#FFF0DC",
  "lavender",
  "aliceblue",
  "lightyellow"
];

type Props = CircleProps & {
  delay?: number;
};

const BlurCircle = ({ delay = 0, ...props }: Props): JSX.Element => {
  const colors = useRef(
    [...BlurCircleColors].sort(() => Math.random() - 0.5)
  ).current;
  const radius = useSharedValue(props.r);
  const color = useSharedValue(0);
  const animatedColor = useDerivedValue(() =>
    interpolateColor(
      color.value,

      [0, 0.2, 0.4, 0.6, 0.8, 1],
      [...colors]
    )
  );

  useEffect(() => {
    radius.value = withDelay(
      delay,
      withRepeat(
        withSequence(
          withTiming(props.r + props.r * 0.3, { duration: 2500 }),
          withTiming(props.r, { duration: 2500 })
        ),
        -1
      )
    );
    color.value = withDelay(
      delay,
      withRepeat(
        withSequence(
          withTiming(1, { duration: 10000 }),
          withTiming(0, { duration: 10000 })
        ),
        -1
      )
    );
  }, [props.r, delay, radius]);

  return <Circle {...props} r={radius} color={animatedColor} />;
};

export default BlurCircle;
