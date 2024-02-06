import { ITaskEntity, ITaskEntityIn } from "./types";

export class TaskEntity implements ITaskEntity {
  public id: number = 0;

  public title: string = "";

  public description: string | undefined;

  public isDone: boolean = false;

  public constructor(data: ITaskEntityIn) {
    Object.entries(data).forEach(([key, value]) => {
      this[key] = value;
    });
  }

  public serialize = (): ITaskEntityIn => ({
    description: this.description,
    id: this.id,
    isDone: this.isDone,
    title: this.title
  });
}
