import { AbstractCategoriesList } from "./lists/AbstractCategoriesList";
import { AbstractFilmsList } from "./lists/AbstractFilmsList";
import {
  FiltersData,
  ICategory,
  IFilm,
  SearchByTextFilterType,
} from "./types/types";

class Films extends AbstractFilmsList {
  applyFiltersValue(filterSettings: FiltersData): void {
    throw new Error("Method not implemented.");
  }
  filterByText(): IFilm[] {
    throw new Error("Method not implemented.");
  }
  filterByYears(): IFilm[] {
    throw new Error("Method not implemented.");
  }
  filetrByAwards(): IFilm[] {
    throw new Error("Method not implemented.");
  }
  filetrByRating(): IFilm[] {
    throw new Error("Method not implemented.");
  }
}

const films = new Films([]);

class Categories extends AbstractCategoriesList {
  applySearchValue(filterSettings: SearchByTextFilterType): void {
    throw new Error("Method not implemented.");
  }
  filterByText(): ICategory[] {
    throw new Error("Method not implemented.");
  }
}

const categories = new Categories([]);
