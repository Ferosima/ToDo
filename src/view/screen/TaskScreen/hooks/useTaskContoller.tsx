import { RootStackParamList } from "../../../navigation/types";
import { TaskEntity } from "@domain/entities/task";
import { tasksStore } from "@domain/stores/tasks";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useCallback, useEffect, useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { SCREENS } from "@constants/screens";

type TTaskFields = {
  description: string;
  title: string;
};
type TTaskErrors = {
  [key in keyof TTaskFields]?: string;
};

const initialFields = {
  description: "",
  title: ""
};

export const useTaskControllerHook = ({
  navigation,
  route
}: NativeStackScreenProps<RootStackParamList, SCREENS.TASK, "MyStack">): [
  TTaskFields,
  TTaskErrors,
  { text: string },
  (key: string) => (e: NativeSyntheticEvent<TextInputChangeEventData>) => void,
  () => void
] => {
  const [task, setTask] = useState<TTaskFields>(initialFields);
  const [errors, setErrors] = useState<TTaskErrors>(initialFields);
  const isEdit = route.params.taskId;
  const button = { text: isEdit ? "Edit" : "Add New Task" };

  useEffect(() => {
    if (!route.params.taskId) return;
    const { title = "", description = "" } =
      tasksStore._tasks.get(route.params.taskId) ?? {};

    setTask({ description, title: String(title) });
  }, [route.params.taskId]);

  const onChange =
    (key: string) => (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      setTask({ ...task, [key]: e.nativeEvent.text });
    };

  const onConfirm = () => {
    // Clear Errors
    setErrors({});

    const valid = validate(task);
    if (!valid) return;

    if (isEdit) {
      tasksStore.editTask(route.params.taskId, { ...task });
    } else {
      tasksStore.addTask(new TaskEntity({ ...task, id: Date.now() }));
    }
    navigation.goBack();
  };

  const validate = useCallback((fields: TTaskFields): boolean => {
    if (!fields.title) {
      setErrors({ title: "This fiels is required" });
      return false;
    }
    return true;
  }, []);

  return [task, errors, button, onChange, onConfirm];
};
