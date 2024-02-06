import {ITasksStore} from './types';
import {HydrateStore} from '../types/HydrateStore';
import {action, computed, makeObservable, observable} from 'mobx';
import {ITaskEntity} from '@domain/entities/task/types';

const data = [
  {
    description: 'Important Task Description',
    isDone: true,
    title: 'Important Task',
  },
  {description: 'Important Task Description', title: 'Important Task'},
  {description: 'Important Task Description', title: 'Important Task'},
  {description: 'Important Task Description', title: 'Important Task'},
  {description: 'Important Task Description', title: 'Important Task'},
  {description: 'Important Task Description', title: 'Important Task'},
  {description: 'Important Task Description', title: 'Important Task'},
  {description: 'Important Task Description', title: 'Important Task'},
  {description: 'Important Task Description', title: 'Important Task'},
  {description: 'Important Task Description', title: 'Important Task'},
  {description: 'Important Task Description', title: 'Important Task'},
];

export class TasksStore extends HydrateStore implements ITasksStore {
  public _taskss = new Map();

  public constructor() {
    super('TasksStore', ['_taskss']);
    makeObservable(this, {
      _taskss: observable,

      addTask: action,
      deleteTask: action,
      editTask: action,

      tasks: computed,
    });
  }

  public get tasks(): ITaskEntity[] {
    return Array.from(this._taskss, ([id, task]) => task).sort((a, b) => {
      // First, sort by isDone (false comes before true)
      if (a.isDone !== b.isDone) {
        return a.isDone ? 1 : -1;
      } else {
        // If isDone is the same, sort by id
        return a.id - b.id;
      }
    });
  }

  public addTask = (task: ITaskEntity): void => {
    this._taskss.set(task.id, task);
  };

  public editTask = (task: ITaskEntity): void => {
    this._taskss.set(task.id, task);
  };

  public deleteTask = (id: number): void => {
    this._taskss.delete(id);
  };
}

export const tasksStore = new TasksStore();
