import { DefaultTask } from "../Tasks/DefaultTask";
import { TaskWithConfirmation } from "../Tasks/TaskWithConfirmation";
import {
  IRepository,
  ITask,
  ITaskData,
  ITaskList,
  ITasksInfo,
} from "../types/types";

export class List implements ITaskList {
  repository: IRepository;

  constructor(repository: IRepository) {
    this.repository = repository;
  }

  addTask(task: ITaskData): ITask | null {
    try {
      if (task.description.length < 3 && task.name.length < 3)
        throw new Error("The task must have a name and description");
      const newTask = task.isWithConfirmation
        ? new TaskWithConfirmation(task)
        : new DefaultTask(task);
      this.repository.create(newTask.taskData);
      return newTask.taskData;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  removeTask(id: ITask["id"]): void {
    this.repository.delete(id);
  }
  updateTask(task: ITask): ITask | null {
    try {
      const taskData = this.repository.findById(task.id);
      if (!taskData) throw new Error("Task by this id not found");
      const updatedTask = taskData.isWithConfirmation
        ? new TaskWithConfirmation(taskData)
        : new DefaultTask(taskData);
      updatedTask.updateTaskData(task);
      this.repository.update(updatedTask.taskData);
      return updatedTask.taskData;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  getTaskById(id: ITask["id"]): ITask | null {
    try {
      const taskData = this.repository.findById(id);
      if (!taskData) throw new Error("Task by this id not found");
      return taskData;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  getAllTasks(): ITask[] {
    return this.repository.getAll();
  }
  getTasksInfo(): ITasksInfo {
    const all = this.repository.getAll().length;
    const fulfilled = this.repository.getFulfilled().length;
    const notFulfilled = this.repository.getNotFulfilled().length;
    return {
      all,
      fulfilled,
      notFulfilled,
    };
  }
}
