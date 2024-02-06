import {SCREENS} from '@constants/screens';
import {TTask} from '@domain/entities/task/types';

export type RootStackParamList = {
  [SCREENS.HOME]: undefined;
  [SCREENS.TASK]: {taskId: TTask['id']};
};
