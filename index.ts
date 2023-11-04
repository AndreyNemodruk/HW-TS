import { categories, films } from "./data/data";
import { CategoryList } from "./lists/CategoryList";
import { FilmsList } from "./lists/FilmsList";
import { EAwards } from "./types/types";

const filmsList = new FilmsList(films);
const category = new CategoryList(categories);

// category.applySearchValue("филь");
// console.log(category.getFilteredFilms());

// filmsList.applyFiltersValue({
//   yearFrom: 2022,
//   yearTo: 2023,
//   rating: null,
//   awards: EAwards.EmmyAwards,
// });

// filmsList.applyFiltersValue({
//   yearFrom: 2016,
//   yearTo: 2023,
//   rating: null,
//   awards: EAwards.BAFTAAwards,
// });

filmsList.applyFiltersValue({
  yearFrom: 2016,
  yearTo: 2023,
  rating: 3,
  awards: null,
});

console.log(filmsList.getFilteredFilms());
