import {BackdropBlur, Canvas, Fill} from '@shopify/react-native-skia';
import React from 'react';
import {ViewProps} from 'react-native';
import Animated, {AnimateProps} from 'react-native-reanimated';
import styles from './styles';

type Props = AnimateProps<ViewProps> & {
  children?: React.ReactNode;
};

const Card: React.FC<Props> = ({...props}) => {
  return (
    <Animated.View {...props} style={[styles.wrapper, props.style]}>
      {props.children}
      <Canvas style={styles.background}>
        <BackdropBlur blur={4}>
          <Fill color="rgba(255, 255, 255, 0.5)" />
        </BackdropBlur>
      </Canvas>
    </Animated.View>
  );
};

export default Card;
