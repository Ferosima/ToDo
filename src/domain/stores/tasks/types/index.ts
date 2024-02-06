import {ITaskEntity, ITaskEntityIn} from '@domain/entities/task/types';
import {HydrateStore} from '@domain/stores/types/HydrateStore';

export declare class ITasksStore extends HydrateStore {
  public addTask(task: ITaskEntity): void;

  public editTask(id: ITaskEntity['id'], props: Partial<ITaskEntityIn>): void;

  public deleteTask(id: number): void;
}
