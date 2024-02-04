import {makeAutoObservable} from 'mobx';
import {TTask} from '../types';

export class Task {
  public id: number;
  public title: string;
  public description: string;

  public isDone: boolean = false;

  public constructor({title, description, id}: TTask) {
    this.id = id;
    this.title = title;
    this.description = description;

    makeAutoObservable(this);
  }

  public setDone = (isDone: boolean) => {
    this.isDone = isDone;
  };
}
