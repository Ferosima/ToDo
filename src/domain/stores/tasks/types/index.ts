import {HydrateStore} from 'src/domain/stores/types/HydrateStore';

export type TTask = {
  id: number;
  title: string;
  description: string;
  done?: boolean;
};

export declare class ITasksStore extends HydrateStore {
  // public get tasks: Map<number, TTask>;

  public addTask(task: TTask): void;

  public editTask(task: TTask): void;

  public deleteTask(id: number): void;
}
