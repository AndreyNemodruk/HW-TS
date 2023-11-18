import {
  IFilterSettings,
  ITask,
  ITaskListWithSearchAndSort,
} from "../types/types";
import { ListWithSearch } from "./ListWithSearch";

export class ListWithSearchAndSort
  extends ListWithSearch
  implements ITaskListWithSearchAndSort
{
  filterSettings: IFilterSettings = { byDate: false, byStatus: false };

  sort(tasks: ITask[]): ITask[] {
    let sortedTasks = [...tasks];
    if (this.filterSettings.byStatus) {
      sortedTasks.sort((a, b) => {
        if (a.isFulfilled === b.isFulfilled) {
          return 0;
        } else if (a.isFulfilled) {
          return -1;
        } else {
          return 1;
        }
      });
    }

    if (this.filterSettings.byDate) {
      sortedTasks.sort((a, b) => {
        return b.createdAt.getTime() - a.createdAt.getTime();
      });
    }

    return sortedTasks;
  }

  searchTasksByTextWithSort(searchText: string): ITask[] {
    const tasks = this.repository.findByDescriptionOrName(searchText);
    return this.sort(tasks);
  }

  getAllTasksWithSort(): ITask[] {
    const allTasks = this.getAllTasks();
    return this.sort(allTasks);
  }

  setFilterSettings(filterSettings: IFilterSettings) {
    this.filterSettings = filterSettings;
  }
}
