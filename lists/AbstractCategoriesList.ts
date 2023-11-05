import {
  ICategory,
  IListCategoties,
  SearchByTextFilterType,
} from "../types/types";

export abstract class AbstractCategoriesList implements IListCategoties {
  protected list: ICategory[];
  protected filters: SearchByTextFilterType = {
    searchTextFilter: {
      filter: null,
    },
  };

  constructor(list: ICategory[]) {
    this.list = list;
  }
  abstract applySearchValue(filterSettings: SearchByTextFilterType): void;
  abstract filterByText(): ICategory[];
}
