import styles from "./styles";
import { RootStackParamList } from "../../../../navigation/types";
import Row from "@components/block/Row/Row";
import { Icon } from "@components/typo/Icon/Icon";
import Text from "@components/typo/Text/Text";
import { COLORS } from "@constants/styles";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "@constants/screens";
import { StackNavigationProp } from "@react-navigation/stack";

const Header = (): JSX.Element => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, SCREENS.HOME>>();

  const onPress = () => {
    navigation.goBack();
  };

  return (
    <Row style={[styles.wrapper]}>
      <Row style={[styles.row]}>
        <Text type="t2">New Task</Text>
        <TouchableOpacity
          onPress={onPress}
          hitSlop={{ bottom: 10, left: 10, right: 10, top: 10 }}
        >
          <Icon name="Close" color={COLORS.main} />
        </TouchableOpacity>
      </Row>
    </Row>
  );
};

export default Header;
