import { SCREENS } from "@constants/screens";
import { ITaskEntity } from "@domain/entities/task/types";

export type RootStackParamList = {
  [SCREENS.HOME]: undefined;
  [SCREENS.TASK]: { taskId?: ITaskEntity["id"] };
};
