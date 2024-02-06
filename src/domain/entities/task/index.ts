import {ITaskEntity, ITaskEntityIn} from './types';
import {makeAutoObservable} from 'mobx';

export class TaskEntity implements ITaskEntity {
  public id: number = 0;

  public title: string = '';

  public description: string | undefined;

  public isDone: boolean = false;

  public constructor(data: ITaskEntityIn) {
    Object.entries(data).forEach(([key, value]) => {
      this[key] = value;
    });

    makeAutoObservable(this);
  }

  public patch = (props: Partial<ITaskEntityIn>): void => {
    Object.entries(props).forEach(([key, value]) => {
      if (key === 'id') return;
      this[key] = value;
    });
  };
}
