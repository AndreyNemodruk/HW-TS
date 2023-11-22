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
  role: ERole;
}

export interface IManager extends IUser {
  createTask(task: ITask): void;
  assignTask(task: ITask, developer: IDeveloper): void;
  completeTask(task: ITask): void;
  role: ERole.Manager;
}

export interface IDeveloper extends IUser {
  assignTask(task: ITask, developer: IDeveloper): void;
  completeTask(task: ITask): void;
  role: ERole.Developer;
}
