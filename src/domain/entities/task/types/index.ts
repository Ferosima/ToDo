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

  public constructor(data: ITaskEntityIn);

  public patch(props: Partial<ITaskEntityIn>): void;
}
