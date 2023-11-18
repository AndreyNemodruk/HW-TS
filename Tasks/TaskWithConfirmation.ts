import { ITask } from "../types/types";
import { AbstractTask } from "./AbstractTask";
import readlineSync from "readline-sync";

export class TaskWithConfirmation extends AbstractTask {
  updateTaskData(taskData: ITask) {
    if (typeof window !== "undefined") {
      const confirmation = window.confirm(
        `Are you sure you want to update task?`
      );
      if (confirmation) {
        this.name = taskData.name;
        this.description = taskData.description;
        this.updatedAt = new Date();
        this.isFulfilled = taskData.isFulfilled;
        this.isWithConfirmation = taskData.isWithConfirmation;
        return taskData;
      }
      throw new Error("Task update not confirmed");
    } else {
      if (readlineSync.keyInYN(`Are you sure you want to update task?`)) {
        this.name = taskData.name;
        this.description = taskData.description;
        this.updatedAt = new Date();
        this.isFulfilled = taskData.isFulfilled;
        this.isWithConfirmation = taskData.isWithConfirmation;
        return taskData;
      }
      throw new Error("Task update not confirmed");
    }
  }
}
