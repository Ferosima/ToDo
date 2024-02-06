import { ITasksStore } from "./types";
import { HydrateStore } from "../types/HydrateStore";
import { action, computed, makeObservable, observable } from "mobx";
import { ITaskEntity, ITaskEntityIn } from "@domain/entities/task/types";
import { TaskEntity } from "@domain/entities/task";

export class TasksStore extends HydrateStore implements ITasksStore {
  public _tasks = new Map<number, ITaskEntity>();

  public constructor() {
    super("TasksStore", [
      {
        deserialize: (value): any => {
          if (value instanceof Map)
            return new Map(
              Array.from(value).map(([id, task]) => [id, new TaskEntity(task)])
            );
        },
        key: "_tasks",
        serialize: (value: Map<number, ITaskEntity>): any =>
          Array.from(value).map(([id, task]) => [id, task?.serialize?.()])
      }
    ]);
    makeObservable(this, {
      _tasks: observable,

      addTask: action,
      deleteTask: action,
      editTask: action,

      tasks: computed
    });

    this._tasks.clear();
  }

  public get tasks(): ITaskEntity[] {
    return Array.from(this._tasks, ([id, task]) => task).sort((a, b) => {
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
    this._tasks.set(task.id, task);
  };

  public editTask = (
    id: ITaskEntity["id"],
    props: Partial<ITaskEntityIn>
  ): void => {
    const task = this._tasks.get(id);
    if (task) {
      task.patch(props);
    }
  };

  public deleteTask = (id: number): void => {
    this._tasks.delete(id);
  };
}

export const tasksStore = new TasksStore();
