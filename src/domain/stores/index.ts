import {tasksStore} from './tasks';
import {ITasksStore} from '../entities/task/types';

export interface IMainStore {
  tasksStore: ITasksStore;
}

const mainStore: IMainStore = {
  tasksStore: tasksStore,
};

export default mainStore;
