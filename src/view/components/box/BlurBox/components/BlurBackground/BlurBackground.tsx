import BlurCircle from './components/Circle';
import styles from './styles';
import {SIZES} from '@constants/styles';
import {BlurMask, Canvas} from '@shopify/react-native-skia';
import React, {useRef} from 'react';

const BlurBackground = (): JSX.Element => {
  const r = useRef(SIZES.WINDOW.WIDTH / 2).current;
  const circles = useRef(new Array(6).fill(1)).current;
  const steps = 5;
  const step = SIZES.WINDOW.HEIGHT / steps;

  return (
    <Canvas style={styles.background}>
      <BlurMask blur={50} style="normal" />

      {circles.map((value, index) => (
        <BlurCircle
          key={index}
          cx={index % 2 ? SIZES.WINDOW.WIDTH : 0}
          cy={step * index}
          r={r}
          delay={index * 1000}
        />
      ))}
    </Canvas>
  );
};

export default BlurBackground;
