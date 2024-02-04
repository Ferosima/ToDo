import {SIZES} from '@constants/styles';
import {vec} from '@shopify/react-native-skia';
import React from 'react';
import {
  SafeAreaView,
  SafeAreaViewProps,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import BlurBackground from './components/BlurBackground/BlurBackground';
import BlurEdge from './components/BlurEdge/Blur';
import styles from './styles';

type Props = SafeAreaViewProps & {
  children?: React.ReactNode;
  bottomBlur?: boolean;
};

const BlurBox = ({bottomBlur, ...props}: Props) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView {...props} style={[styles.wrapper, props.style]}>
      <BlurEdge
        height={SIZES.HOME.HEADER + insets.top}
        colors={['white', '#FFFFFF00']}
        start={vec(0, 0 + insets.top)}
        end={vec(0, SIZES.HOME.HEADER + insets.top)}
        style={{...styles.blur, ...styles.top}}
      />
      {props.children}
      <BlurEdge
        enabled={bottomBlur}
        height={SIZES.HOME.HEADER}
        start={vec(0, 0)}
        end={vec(0, SIZES.HOME.HEADER)}
        colors={['#FFFFFF00', 'white']}
        style={{...styles.blur, ...styles.bottom}}
      />

      <BlurBackground />
    </SafeAreaView>
  );
};

export default BlurBox;
