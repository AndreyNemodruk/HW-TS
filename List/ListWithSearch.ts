import { ITask, ITaskListWithSearch } from "../types/types";
import { List } from "./List";

export class ListWithSearch extends List implements ITaskListWithSearch {
  searchTasksByText(searchText: string): ITask[] {
    return this.repository.findByDescriptionOrName(searchText);
  }
}
