import { AbstractUser } from "./AbstractUser";
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

/* можливо таким чином з абстрактним класом юзера буде трохи краще, але в цілому ідея була така,
що assignTask, completeTask у двох різних інтерфейсах не просто дублюються, а просто мають різні реалізації, 
наприклад assignTask може мати різні перевірки щодо підлеглих на яких призначається таска(девелопер назначає на своʼїх підлеглих,
або робить assign на менеджера і таска переходить в статус wait for info), метод completeTask, також 
може мати різні статуси, перевірки і причини з яких ця таска помічається як виконана). Метод createTask доступний при цьому тільки менеджеру.
 */

class Manager extends AbstractUser implements IManager {
  role: ERole.Manager = ERole.Manager;

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

class Developer extends AbstractUser implements IDeveloper {
  role: ERole.Developer = ERole.Developer;
  assignTask(task: ITask, developer: IDeveloper): void {
    throw new Error("Method not implemented.");
  }
  completeTask(task: ITask): void {
    throw new Error("Method not implemented.");
  }
}
