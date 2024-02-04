import {
  ObservableMap,
  action,
  computed,
  makeObservable,
  observable,
} from 'mobx';
import {HydrateStore} from '../types/HydrateStore';
import {ITasksStore, TTask} from './types';

const data = [
  {
    title: 'Important Task',
    description: 'Important Task Description',
    done: true,
  },
  {title: 'Important Task', description: 'Important Task Description'},
  {title: 'Important Task', description: 'Important Task Description'},
  {title: 'Important Task', description: 'Important Task Description'},
  {title: 'Important Task', description: 'Important Task Description'},
  {title: 'Important Task', description: 'Important Task Description'},
  {title: 'Important Task', description: 'Important Task Description'},
  {title: 'Important Task', description: 'Important Task Description'},
  {title: 'Important Task', description: 'Important Task Description'},
  {title: 'Important Task', description: 'Important Task Description'},
  {title: 'Important Task', description: 'Important Task Description'},
];

export class TasksStore extends HydrateStore implements ITasksStore {
  private _tasks = new ObservableMap<number, TTask>();

  constructor() {
    super('TasksStore', ['tasks']);
    makeObservable(this, {
      tasks: computed,
      addTask: action,
      editTask: action,
      deleteTask: action,
    });
    console.log(this._tasks.size);
    if (!this._tasks.size) {
      data.forEach((task, index) => this.addTask({...task, id: index}));
    }
  }

  public get tasks(): TTask[] {
    return Array.from(this._tasks, ([id, task]) => task);
  }

  public addTask = (task: TTask) => {
    this._tasks.set(task.id, task);
  };

  public editTask = (task: TTask) => {
    this._tasks.set(task.id, task);
  };

  public deleteTask = (id: number) => {
    console.log('FF', id, this._tasks.get(id));
    this._tasks.delete(id);
  };
}

export const tasksStore = new TasksStore();
