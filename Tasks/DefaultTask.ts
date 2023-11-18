import { ITask } from "../types/types";
import { AbstractTask } from "./AbstractTask";

export class DefaultTask extends AbstractTask {
  updateTaskData(taskData: ITask) {
    this.name = taskData.name;
    this.description = taskData.description;
    this.updatedAt = new Date();
    this.isFulfilled = taskData.isFulfilled;
    this.isWithConfirmation = taskData.isWithConfirmation;
    return taskData;
  }
}
