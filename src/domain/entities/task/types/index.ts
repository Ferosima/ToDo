export type ITaskEntityIn = {
  id: number;
  title: string;
  description?: string;
  isDone?: boolean;
};

export declare class ITaskEntity {
  public id: number;

  public title: string;

  public description: string | undefined;

  public isDone: boolean;

  public constructor({title, description, id}: ITaskEntityIn);

  public setDone(isDone: boolean): void;
}
