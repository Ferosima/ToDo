import {TaskEntity} from '@domain/entities/task';
import {tasksStore} from '@domain/stores/tasks';
import {useNavigation} from '@react-navigation/native';
import {useCallback, useState} from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';

type TTaskFields = {
  description: string;
  title: string;
};
type TTaskErrors = {
  [key in keyof TTaskFields]?: string;
};

const initialFields = {
  description: '',
  title: '',
};

export const useTaskControllerHook = (): [
  TTaskErrors,
  (key: string) => (e: NativeSyntheticEvent<TextInputChangeEventData>) => void,
  () => void,
] => {
  const navigation = useNavigation();
  const [task, setTask] = useState<TTaskFields>(initialFields);
  const [errors, setErrors] = useState<TTaskErrors>(initialFields);

  const onChange =
    (key: string) => (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      setTask({...task, [key]: e.nativeEvent.text});
    };

  const onConfirm = () => {
    // Clear Errors
    setErrors({});

    const valid = validate(task);
    if (!valid) return;

    tasksStore.addTask(new TaskEntity({...task, id: Date.now()}));
    navigation.goBack();
  };

  const validate = useCallback((fields: TTaskFields): boolean => {
    if (!fields.title) {
      setErrors({title: 'This fiels is required'});
      return false;
    }
    return true;
  }, []);

  return [errors, onChange, onConfirm];
};
