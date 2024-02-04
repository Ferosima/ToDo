import {SIZES} from '@constants/styles';
import {BlurMask, Canvas} from '@shopify/react-native-skia';
import React, {useRef} from 'react';
import BlurCircle from './components/Circle';
import styles from './styles';

const colors = [
  '#D6D9FA',
  '#D6F9EE',
  '#FFF0DC',
  'lavender',
  'aliceblue',
  'lightyellow',
];

const BlurBackground = () => {
  const r = useRef(SIZES.WINDOW.WIDTH / 4).current;
  const steps = 5;
  const step = SIZES.WINDOW.HEIGHT / steps;

  return (
    <Canvas style={styles.background}>
      <BlurMask blur={50} style="normal" />

      {colors.map((color, index) => (
        <BlurCircle
          key={index}
          cx={index % 2 ? SIZES.WINDOW.WIDTH : 0}
          cy={step * index}
          r={r}
          color={color}
          delay={index * 2000}
        />
      ))}
    </Canvas>
  );
};

export default BlurBackground;
