import { ERole, IDeveloper, ITask, IUser } from "./types/types";

export abstract class AbstractUser implements IUser {
  id: number;
  assignedTasks: ITask[];
  name: string;

  constructor({ id, assignedTasks, name }: IUser) {
    this.id = id;
    this.assignedTasks = assignedTasks;
    this.name = name;
  }
  abstract assignTask(task: ITask, developer: IDeveloper): void;
  abstract completeTask(task: ITask): void;
}
