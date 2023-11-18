import { IFilterSettings, IRepository, ITask } from "../types/types";

export class Repository implements IRepository {
  list: ITask[] = [];
  create(task: ITask): void {
    this.list.push(task);
  }
  delete(id: ITask["id"]): void {
    this.list = this.list.filter((i) => i.id !== id);
  }
  update(task: ITask): ITask {
    const index = this.list.findIndex((i) => i.id === task.id);
    if (index === -1) throw new Error("Task by this id not found");
    this.list[index] = task;
    return task;
  }
  findById(id: ITask["id"]): ITask | undefined {
    return this.list.find((i) => i.id === id);
  }
  getAll(): ITask[] {
    return this.list;
  }
  sort(filterSettings: IFilterSettings): ITask[] {
    throw new Error("Method not implemented.");
  }
  findByDescriptionOrName(searchText: string): ITask[] {
    return this.list.filter(
      (i) => i.description.includes(searchText) || i.name.includes(searchText)
    );
  }

  getFulfilled(): ITask[] {
    return this.list.filter((i) => i.isFulfilled);
  }

  getNotFulfilled(): ITask[] {
    return this.list.filter((i) => !i.isFulfilled);
  }
}
