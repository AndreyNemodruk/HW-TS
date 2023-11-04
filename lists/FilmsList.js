"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmsList = void 0;
const AbstractList_1 = require("./AbstractList");
class FilmsList extends AbstractList_1.AbstractList {
    constructor() {
        super(...arguments);
        this.yearsFrom = null;
        this.yearsTo = null;
        this.searchText = null;
        this.rating = null;
        this.awards = null;
    }
    applyFiltersValue(filters) {
        this.yearsFrom = filters.yearFrom;
        this.yearsTo = filters.yearTo;
        this.rating = filters.rating;
        this.awards = filters.awards;
    }
    filterByYear(data) {
        if (!this.yearsFrom && !this.yearsTo)
            return data;
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
    filterByRaiting(data) {
        if (!this.rating)
            return data;
        return data.filter((i) => {
            if (this.rating === null)
                return true;
            return i.rating >= this.rating;
        });
    }
    filterByAward(data) {
        if (!this.awards)
            return data;
        return data.filter((film) => film.awards.some((award) => { var _a; return (_a = this.awards) === null || _a === void 0 ? void 0 : _a.includes(award); }));
    }
    getFilteredFilms() {
        const fiteredByText = this.filterByText();
        const filteredByYear = this.filterByYear(fiteredByText);
        const filterByAward = this.filterByAward(filteredByYear);
        const filteredByRating = this.filterByRaiting(filterByAward);
        return filteredByRating;
    }
}
exports.FilmsList = FilmsList;
