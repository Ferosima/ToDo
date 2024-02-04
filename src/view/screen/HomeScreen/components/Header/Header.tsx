import Row from '@components/block/Row/Row';
import {Icon} from '@components/typo/Icon/Icon';
import Text from '@components/typo/Text/Text';
import {COLORS, SIZES} from '@constants/styles';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '@constants/screens';
import {RootStackParamList} from 'src/view/navigation/types';
import {StackNavigationProp} from '@react-navigation/stack';

const Header = () => {
  const insets = useSafeAreaInsets();
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, SCREENS.HOME>>();

  const onPress = () => {
    navigation.navigate(SCREENS.TASK);
  };
  return (
    <Row
      style={[
        styles.wrapper,
        {
          height: SIZES.HOME.HEADER + insets.top,
        },
      ]}>
      <Row style={[styles.row, {paddingTop: insets.top}]}>
        <Text type="t2">My List</Text>
        <TouchableOpacity
          onPress={onPress}
          hitSlop={{bottom: 10, top: 10, right: 10, left: 10}}>
          <Icon name="PlusFill" color={COLORS.main} />
        </TouchableOpacity>
      </Row>
    </Row>
  );
};

export default Header;
