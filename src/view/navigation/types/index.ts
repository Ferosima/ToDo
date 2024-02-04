import {SCREENS} from '@constants/screens';
import {TTask} from '@domain/stores/tasks/types';

export type RootStackParamList = {
  [SCREENS.HOME]: undefined;
  [SCREENS.TASK]: {taskId: TTask['id']};
};
