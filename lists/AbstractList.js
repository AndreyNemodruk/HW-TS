"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractList = void 0;
class AbstractList {
    constructor(list) {
        this.list = [];
        this.searchText = null;
        this.list = list;
    }
    applySearchValue(searchText) {
        this.searchText = searchText;
    }
    filterByText() {
        if (!this.searchText)
            return this.list;
        return this.list.filter((i) => {
            if (this.searchText) {
                return i.title.toLowerCase().includes(this.searchText.toLowerCase());
            }
            else {
                return true;
            }
        });
    }
}
exports.AbstractList = AbstractList;
