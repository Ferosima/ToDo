import styles from "./styles";
import { TextProps } from "react-native";
import { createIconSet } from "react-native-vector-icons";
import { IconsId } from "@assets/fonts/Icons/Icons";
import config from "@assets/fonts/Icons/Icons.json";

export interface IconComponentProps extends TextProps {
  /**
   * icon name that should be displayed
   */
  name: IconsId;
  /**
   * color preset
   */
  color?: string;
}

const AIcon = createIconSet(config, "Icons");

/**
 * Simple icon component
 */
export const Icon: React.FunctionComponent<IconComponentProps> = ({
  style,
  ...props
}: React.PropsWithChildren<IconComponentProps>) => (
  <AIcon {...props} style={[styles.icon, style]} />
);
