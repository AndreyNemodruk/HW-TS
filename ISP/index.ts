import { IUser } from "./types/types";
import { ERole, IDeveloper, IManager, ITask } from "./types/types";

class Task implements ITask {
  assignedByUser: IManager | IDeveloper | null;
  id: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  isComplete: boolean;

  constructor({
    assignedByUser,
    id,
    isComplete,
    description,
    createdAt,
    updatedAt,
  }: ITask) {
    this.assignedByUser = assignedByUser;
    this.id = id;
    this.description = description;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.isComplete = isComplete;
  }
}

class Manager implements IManager {
  role: ERole.Manager = ERole.Manager;
  id: number;
  assignedTasks: ITask[];
  name: string;

  constructor({ id, name, assignedTasks }: IUser) {
    this.id = id;
    this.name = name;
    this.assignedTasks = assignedTasks;
  }

  createTask(task: ITask): void {
    throw new Error("Method not implemented.");
  }
  assignTask(task: ITask, developer: IDeveloper): void {
    throw new Error("Method not implemented.");
  }
  completeTask(task: ITask): void {
    throw new Error("Method not implemented.");
  }
}

class Developer implements IDeveloper {
  role: ERole.Developer = ERole.Developer;
  id: number;
  assignedTasks: ITask[];
  name: string;

  constructor({ id, name, assignedTasks }: IUser) {
    this.id = id;
    this.name = name;
    this.assignedTasks = assignedTasks;
  }

  assignTask(task: ITask, developer: IDeveloper): void {
    throw new Error("Method not implemented.");
  }
  completeTask(task: ITask): void {
    throw new Error("Method not implemented.");
  }
}
