type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

type Range<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

export type Raiting = Range<1, 6>;

type AccordanceFilterData = {
  filter: string | null;
};

type RangeFilterData = {
  filter: number | null;
  filterTo: number | null;
};

type ValuesSearchFilterData = {
  values: string[] | null;
};

export type FiltersData = {
  searchTextFilter: AccordanceFilterData;
  yearsFilter: RangeFilterData;
  awardsFilter: ValuesSearchFilterData;
  raitingFilter: ValuesSearchFilterData;
};

export type SearchByTextFilterType = Pick<FiltersData, "searchTextFilter">;

export interface IListCategoties {
  applySearchValue(filterSettings: SearchByTextFilterType): void;
  filterByText(): ICategory[];
}

export interface IListFilms {
  applyFiltersValue(filterSettings: FiltersData): void;
  filterByText(): IFilm[];
  filterByYears(): IFilm[];
  filetrByAwards(): IFilm[];
  filetrByRating(): IFilm[];
}
export interface ICategory {
  id: number;
  title: string;
  films: IFilm[];
}

export interface IFilm {
  id: number;
  title: string;
  year: number;
  rating: Raiting;
  awards: string[];
}
