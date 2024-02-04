import Text from '@components/typo/Text/Text';
import {COLORS} from '@constants/styles';
import {
  BlurMask,
  Canvas,
  CornerPathEffect,
  Path,
  Skia,
} from '@shopify/react-native-skia';
import React, {useMemo, useRef, useState} from 'react';
import {TouchableOpacity, ViewProps} from 'react-native';
import styles from './styles';

type Props = ViewProps & {onPress?: () => void; text: string};

const Button = ({text, onPress, style, ...props}: Props) => {
  const [width, setWidth] = useState(0);
  const height = useRef(52).current;

  const path = useMemo(() => {
    const _path = Skia.Path.Make();
    _path.moveTo(0, height / 2);
    _path.lineTo(3, 3);
    _path.lineTo(width / 2, 0);
    _path.lineTo(width - 3, 3);
    _path.lineTo(width, height / 2);
    _path.lineTo(width - 3, height - 3);
    _path.lineTo(width / 2, height);
    _path.lineTo(3, height - 3);
    _path.lineTo(0, height / 2);
    _path.offset(6, 6);
    _path.close();
    return _path;
  }, [height, width]);

  return (
    <TouchableOpacity
      {...props}
      style={[styles.wrapper, {height: height + 12}, style]}
      onLayout={event => {
        setWidth(event.nativeEvent.layout.width - 12);
      }}
      onPress={onPress}>
      <Text color="white" type="t2">
        {text}
      </Text>
      <Canvas style={[styles.canvas, {height: height + 12}]}>
        <Path path={path} color={COLORS.main}>
          <BlurMask blur={4} style="solid" />
          <CornerPathEffect r={10} />
        </Path>
      </Canvas>
    </TouchableOpacity>
  );
};

export default Button;
