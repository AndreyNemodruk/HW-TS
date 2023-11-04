import { IFilm, ListDataTypes } from "../types/types";

export abstract class AbstractList<K extends keyof ListDataTypes> {
  protected list: ListDataTypes[K][] = [];
  protected searchText: string | null = null;
  constructor(list: ListDataTypes[K][]) {
    this.list = list;
  }

  public applySearchValue(searchText: string) {
    this.searchText = searchText;
  }

  protected filterByText() {
    if (!this.searchText) return this.list;
    return this.list.filter((i) => {
      if (this.searchText) {
        return i.title.toLowerCase().includes(this.searchText.toLowerCase());
      } else {
        return true;
      }
    });
  }

  abstract getFilteredFilms(): IFilm[];
}
