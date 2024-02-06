import TaskCard from "./components/TaskCard/TaskCard";
import styles from "./styles";
import { RootStackParamList } from "../../../../navigation/types";
import { useNavigation } from "@react-navigation/native";
import { ITaskEntity } from "@domain/entities/task/types";
import { tasksStore } from "@domain/stores/tasks";

import { observer } from "mobx-react";
import React, { useCallback, useRef } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { FadeIn, FadeOut } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SCREENS } from "@constants/screens";
import { StackNavigationProp } from "@react-navigation/stack";

const TaskList = observer(() => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, SCREENS.HOME>>();
  const ref = useRef(null);
  const insets = useSafeAreaInsets();

  const onConfirm = useCallback((id: ITaskEntity["id"]): void => {
    navigation.navigate(SCREENS.TASK, { taskId: id });
  }, []);

  const onDismiss = useCallback((id: ITaskEntity["id"]): void => {
    tasksStore.deleteTask(id);
  }, []);

  return (
    <ScrollView
      contentContainerStyle={[styles.wrapper, { paddingBottom: insets.bottom }]}
      ref={ref}
      showsVerticalScrollIndicator={false}
    >
      {tasksStore.tasks.map((item, index) => (
        <TaskCard
          style={styles.item}
          simultaneous={ref}
          key={item.id}
          entering={FadeIn.delay(100 * index)}
          exiting={FadeOut}
          task={item}
          onConfirm={onConfirm}
          onDismiss={onDismiss}
        />
      ))}
    </ScrollView>
  );
});

export default TaskList;
