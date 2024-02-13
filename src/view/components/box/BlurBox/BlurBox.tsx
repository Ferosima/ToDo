import BlurBackground from "./components/BlurBackground/BlurBackground";
import BlurEdge from "./components/BlurEdge/BlurEdge";
import styles from "./styles";
import { View, ViewProps } from "react-native";
import { vec } from "@shopify/react-native-skia";
import React, { useRef } from "react";
import {
  SafeAreaViewProps,
  useSafeAreaInsets
} from "react-native-safe-area-context";

type Props = ViewProps & {
  children?: React.ReactNode;
  bottomBlur?: boolean;
  edges?: SafeAreaViewProps["edges"];
};

const BlurBox = ({
  bottomBlur,
  edges = [],
  ...props
}: React.PropsWithChildren<Props>): JSX.Element => {
  const edgeHeight = useRef(60).current;
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.wrapper, props.style]}>
      <BlurEdge
        height={edgeHeight + insets.top}
        colors={["#FFFFFF90", "#FFFFFF00"]}
        start={vec(0, 0 + insets.top)}
        end={vec(0, edgeHeight + insets.top)}
        style={[styles.blur, styles.top]}
      />

      {props.children}

      <BlurEdge
        enabled={bottomBlur}
        height={edgeHeight}
        start={vec(0, 0)}
        end={vec(0, edgeHeight)}
        colors={["#FFFFFF00", "#FFFFFF80"]}
        style={[styles.blur, styles.bottom]}
      />

      <BlurBackground />
    </View>
  );
};

export default BlurBox;
