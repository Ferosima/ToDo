import {TextProps} from 'react-native';
import {createIconSet} from 'react-native-vector-icons';
import {IconsId} from '@assets/fonts/Icons/Icons';
import config from '@assets/fonts/Icons/Icons.json';
import styles from './styles';

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

const AIcon = createIconSet(config, 'Icons');

/**
 * Simple icon component
 */
export const Icon: React.FunctionComponent<IconComponentProps> = ({
  style,
  ...props
}: React.PropsWithChildren<IconComponentProps>) => {
  // if (!props.color) {
  //   return null;
  // }

  return <AIcon {...props} style={[styles.icon, style]} />;
};
