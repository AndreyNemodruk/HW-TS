import { ITask, ITaskData } from "../types/types";

export abstract class AbstractTask implements ITask {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  isFulfilled: boolean;
  isWithConfirmation: boolean;

  constructor(task: ITaskData) {
    const date = new Date();
    this.id = task.id || Math.floor(Math.random() * 100) + Date.now();
    this.name = task.name;
    this.description = task.description;
    this.createdAt = task.createdAt || date;
    this.updatedAt = date;
    this.isFulfilled = task.isFulfilled;
    this.isWithConfirmation = task.isWithConfirmation;
  }

  get taskData(): ITask {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      isFulfilled: this.isFulfilled,
      isWithConfirmation: this.isWithConfirmation,
    };
  }

  abstract updateTaskData(taskData: ITask): ITask;
}
