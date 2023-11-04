"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryList = void 0;
const AbstractList_1 = require("./AbstractList");
class CategoryList extends AbstractList_1.AbstractList {
    getFilteredFilms() {
        let categories = this.filterByText();
        let films = [];
        categories.forEach((i) => {
            films = [...films, ...i.films];
        });
        return films;
    }
}
exports.CategoryList = CategoryList;
