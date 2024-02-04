import {Circle, CircleProps} from '@shopify/react-native-skia';
import React, {useEffect} from 'react';
import {
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

type Props = CircleProps & {
  delay?: number;
};

const BlurCircle = ({delay = 0, ...props}: Props) => {
  const radius = useSharedValue(props.r);

  useEffect(() => {
    radius.value = withDelay(
      delay,
      withRepeat(
        withSequence(
          withTiming(props.r + props.r * 0.3, {duration: 5000}),
          withTiming(props.r, {duration: 5000}),
        ),
        -1,
      ),
    );
  }, [props.r, delay, radius]);

  return <Circle {...props} r={radius} />;
};

export default BlurCircle;
