import styles from "./styles";
import { RootStackParamList } from "../../../../navigation/types";
import Row from "@components/block/Row/Row";
import { Icon } from "@components/typo/Icon/Icon";
import Text from "@components/typo/Text/Text";
import { SCREENS } from "@constants/screens";
import { COLORS, SIZES } from "@constants/styles";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Header = (): JSX.Element => {
  const insets = useSafeAreaInsets();
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, SCREENS.HOME>>();

  const onPress = () => {
    navigation.navigate(SCREENS.TASK, {});
  };

  return (
    <Row
      style={[
        styles.wrapper,
        {
          height: SIZES.HOME.HEADER + insets.top
        }
      ]}
    >
      <Row style={[styles.row, { paddingTop: insets.top }]}>
        <Text type="t2">My List</Text>
        <TouchableOpacity
          onPress={onPress}
          hitSlop={{ bottom: 10, left: 10, right: 10, top: 10 }}
        >
          <Icon name="PlusFill" color={COLORS.main} />
        </TouchableOpacity>
      </Row>
    </Row>
  );
};

export default Header;
