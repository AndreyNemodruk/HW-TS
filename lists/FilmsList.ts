import { films } from "../data/data";
import { EAwards, FilterSettings, IFilm, Raiting } from "../types/types";
import { AbstractList } from "./AbstractList";

export class FilmsList extends AbstractList<"films"> {
  protected yearsFrom: number | null = null;
  protected yearsTo: number | null = null;
  protected searchText: string | null = null;
  protected rating: Raiting | null = null;
  protected awards: EAwards | null = null;

  applyFiltersValue(filters: FilterSettings) {
    this.yearsFrom = filters.yearFrom;
    this.yearsTo = filters.yearTo;
    this.rating = filters.rating;
    this.awards = filters.awards;
  }

  private filterByYear(data: IFilm[]) {
    if (!this.yearsFrom && !this.yearsTo) return data;
    return data.filter((i) => {
      if (this.yearsFrom && this.yearsTo) {
        return i.year >= this.yearsFrom && i.year <= this.yearsTo;
      }
      if (this.yearsFrom) {
        return i.year >= this.yearsFrom;
      }
      if (this.yearsTo) {
        return i.year <= this.yearsTo;
      }
    });
  }

  private filterByRaiting(data: IFilm[]) {
    if (!this.rating) return data;
    return data.filter((i) => {
      if (this.rating === null) return true;
      return i.rating >= this.rating;
    });
  }
  private filterByAward(data: IFilm[]) {
    if (!this.awards) return data;
    return data.filter((film) =>
      film.awards.some((award) => this.awards?.includes(award))
    );
  }

  getFilteredFilms(): IFilm[] {
    const fiteredByText = this.filterByText();
    const filteredByYear = this.filterByYear(fiteredByText);
    const filterByAward = this.filterByAward(filteredByYear);
    const filteredByRating = this.filterByRaiting(filterByAward);
    return filteredByRating;
  }
}
