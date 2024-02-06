import {ITasksStore} from './types';
import {HydrateStore} from '../types/HydrateStore';
import {action, computed, makeObservable, observable} from 'mobx';
import {ITaskEntity, ITaskEntityIn} from '@domain/entities/task/types';

export class TasksStore extends HydrateStore implements ITasksStore {
  public _taskss = new Map<number, ITaskEntity>();

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

  public editTask = (
    id: ITaskEntity['id'],
    props: Partial<ITaskEntityIn>,
  ): void => {
    const task = this._taskss.get(id);
    if (task) {
      task.patch(props);
    }
  };

  public deleteTask = (id: number): void => {
    this._taskss.delete(id);
  };
}

export const tasksStore = new TasksStore();
