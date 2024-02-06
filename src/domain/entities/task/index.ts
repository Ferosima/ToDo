import {ITaskEntity, ITaskEntityIn} from './types';
import {makeAutoObservable} from 'mobx';

export class TaskEntity implements ITaskEntity {
  public id: number;

  public title: string;

  public description: string | undefined;

  public isDone: boolean = false;

  public constructor({title, description, id, isDone}: ITaskEntityIn) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.isDone = Boolean(isDone);

    makeAutoObservable(this);
  }

  public setDone = (isDone: boolean): void => {
    this.isDone = isDone;
  };
}
