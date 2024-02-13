import Header from "./components/Header/Header";
import styles from "./styles";
import { useTaskControllerHook } from "./hooks/useTaskContoller";
import { RootStackParamList } from "../../navigation/types";
import BlurBox from "@components/box/BlurBox/BlurBox";
import Button from "@components/controls/Button/Button";
import Input from "@components/typo/Input/Input";
import React from "react";
import { ScrollView, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SCREENS } from "@constants/screens";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TaskScreen = ({
  navigation,
  route
}: NativeStackScreenProps<
  RootStackParamList,
  SCREENS.TASK,
  "MyStack"
>): JSX.Element => {
  const [task, errors, button, onChange, onConfirm] = useTaskControllerHook({
    navigation,
    route
  });
  const insets = useSafeAreaInsets();

  return (
    <BlurBox bottomBlur={false}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={styles.wrapper}
        bounces={false}
      >
        <Header />

        <View style={styles.container}>
          <Input
            label="Title"
            style={styles.input}
            value={task.title}
            error={errors.title}
            onChange={onChange("title")}
          />
          <Input
            label="Description"
            multiline
            value={task.description}
            style={styles.input}
            onChange={onChange("description")}
          />
        </View>
      </ScrollView>

      <Button
        {...button}
        style={[styles.button, { marginBottom: insets.bottom }]}
        onPress={onConfirm}
      />
    </BlurBox>
  );
};

export default TaskScreen;
