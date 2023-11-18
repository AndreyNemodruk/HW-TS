export interface ITasksInfo {
  all: number;
  notFulfilled: number;
  fulfilled: number;
}

export interface ITaskList {
  repository: IRepository;
  addTask(task: ITask): ITask | null;
  removeTask(id: ITask["id"]): void;
  updateTask(task: ITask): ITask | null;
  getTaskById(id: ITask["id"]): ITask | null;
  getAllTasks(): ITask[];
  getTasksInfo(): ITasksInfo;
}

export interface ITaskListWithSearch extends ITaskList {
  searchTasksByText(searchText: string): ITask[];
}

export interface ITaskListWithSearchAndSort extends ITaskListWithSearch {
  filterSettings: IFilterSettings;
  sort(tasks: ITask[]): ITask[];
  getAllTasksWithSort(): ITask[];
  searchTasksByTextWithSort(searchText: string): ITask[];
  setFilterSettings(filterSettings: IFilterSettings): void;
}

export interface ITaskData {
  name: string;
  description: string;
  isFulfilled: boolean;
  isWithConfirmation: boolean;
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ITask extends ITaskData {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export type IRepository = {
  readonly list: ITask[];
  create(task: ITask): void;
  delete(id: ITask["id"]): void;
  update(task: ITask): ITask;
  findById(id: ITask["id"]): ITask | undefined;
  getAll(): ITask[];
  findByDescriptionOrName(searchText: string): ITask[];
  sort(filterSettings: IFilterSettings): ITask[];
  getFulfilled(): ITask[];
  getNotFulfilled(): ITask[];
};

export interface IFilterSettings {
  byDate: boolean;
  byStatus: boolean;
}
