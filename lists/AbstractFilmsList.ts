import { FiltersData, IFilm, IListFilms } from "../types/types";

export abstract class AbstractFilmsList implements IListFilms {
  protected list: IFilm[];
  protected filters: FiltersData = {
    searchTextFilter: { filter: null },
    yearsFilter: { filter: null, filterTo: null },
    awardsFilter: { values: null },
    raitingFilter: { values: null },
  };

  constructor(list: IFilm[]) {
    this.list = list;
  }

  abstract applyFiltersValue(filterSettings: FiltersData): void;
  abstract filterByText(): IFilm[];
  abstract filterByYears(): IFilm[];
  abstract filetrByAwards(): IFilm[];
  abstract filetrByRating(): IFilm[];
}
