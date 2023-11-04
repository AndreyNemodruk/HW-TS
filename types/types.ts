export enum EAwards {
  AcademyAwards = "Academy Awards, Oscar",
  GoldenGlobes = "Golden Globes",
  BAFTAAwards = "BAFTA Awards",
  EmmyAwards = "Emmy Awards",
  RazzieAwards = "Razzie Awards",
  MTVMovieAwards = "MTV Movie Awards",
}

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
  awards: EAwards[];
}

export interface ListDataTypes {
  films: IFilm;
  categories: ICategory;
}

export interface FilterSettings {
  yearFrom: number | null;
  yearTo: number | null;
  rating: Raiting | null;
  awards: EAwards | null;
}
