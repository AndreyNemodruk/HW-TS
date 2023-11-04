"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data/data");
const CategoryList_1 = require("./lists/CategoryList");
const FilmsList_1 = require("./lists/FilmsList");
const types_1 = require("./types/types");
const filmsList = new FilmsList_1.FilmsList(data_1.films);
const category = new CategoryList_1.CategoryList(data_1.categories);
// category.applySearchValue("филь");
// console.log(category.getFilteredFilms());
// filmsList.applyFiltersValue({
//   yearFrom: 2022,
//   yearTo: 2023,
//   rating: null,
//   awards: EAwards.EmmyAwards,
// });
filmsList.applyFiltersValue({
    yearFrom: 2016,
    yearTo: 2023,
    rating: null,
    awards: types_1.EAwards.BAFTAAwards,
});
console.log(filmsList.getFilteredFilms());
