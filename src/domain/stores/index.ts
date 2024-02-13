import { tasksStore } from "./tasks";
import { ITasksStore } from "./tasks/types";

export interface IMainStore {
  tasksStore: ITasksStore;
}

const mainStore: IMainStore = {
  tasksStore
};

export default mainStore;
