import { categories } from "../data/data";
import { ICategory, IFilm } from "../types/types";
import { AbstractList } from "./AbstractList";

export class CategoryList extends AbstractList<"categories"> {
  getFilteredFilms(): IFilm[] {
    let categories: ICategory[] = this.filterByText();
    let films: IFilm[] = [];
    categories.forEach((i) => {
      films = [...films, ...i.films];
    });
    return films;
  }
}
