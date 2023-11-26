export interface ITask {
  id: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  isComplete: boolean;
  assignedByUser: IManager | IDeveloper | null;
}

export enum ERole {
  Developer = "Developer",
  Manager = "Manager",
}

export interface IUser {
  id: number;
  assignedTasks: ITask[];
  name: string;
  assignTask(task: ITask, developer: IDeveloper): void;
  completeTask(task: ITask): void;
}

export interface IManager extends IUser {
  role: ERole.Manager;
  createTask(task: ITask): void;
}

export interface IDeveloper extends IUser {
  role: ERole.Developer;
}
