"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categories = exports.series = exports.cartoons = exports.films = void 0;
const types_1 = require("../types/types");
exports.films = [
    {
        id: 22235056,
        title: "Схватка с дьяволом",
        year: 2023,
        rating: 5,
        awards: [types_1.EAwards.BAFTAAwards],
    },
    {
        id: 22359426,
        title: "Логово шпиона",
        year: 2023,
        rating: 4,
        awards: [types_1.EAwards.EmmyAwards, types_1.EAwards.BAFTAAwards],
    },
    {
        id: 22235046,
        title: "Время расплаты",
        year: 2021,
        rating: 3,
        awards: [types_1.EAwards.EmmyAwards, types_1.EAwards.BAFTAAwards],
    },
    {
        id: 21749986,
        title: "Заложники безумия",
        year: 2021,
        rating: 3,
        awards: [types_1.EAwards.EmmyAwards, types_1.EAwards.BAFTAAwards, types_1.EAwards.MTVMovieAwards],
    },
    {
        id: 22155006,
        title: "Тайна Меркатора",
        year: 2019,
        rating: 3,
        awards: [],
    },
];
exports.cartoons = [
    {
        id: 22356756,
        title: "Пернатый патруль",
        year: 2018,
        rating: 2,
        awards: [types_1.EAwards.GoldenGlobes],
    },
    {
        id: 13084145,
        title: "Огрики",
        year: 2013,
        rating: 3,
        awards: [types_1.EAwards.EmmyAwards],
    },
    {
        id: 22359506,
        title: "Приключения Арахиса и Поросенка",
        year: 2015,
        rating: 3,
        awards: [types_1.EAwards.EmmyAwards, types_1.EAwards.GoldenGlobes],
    },
    {
        id: 18299946,
        title: "Коати. Легенда джунглей",
        year: 2018,
        rating: 3,
        awards: [],
    },
    {
        id: 17594265,
        title: "Золушка и тайна волшебного камня",
        year: 2018,
        rating: 5,
        awards: [types_1.EAwards.AcademyAwards, types_1.EAwards.EmmyAwards],
    },
];
exports.series = [
    {
        id: 22484096,
        title: "Успеть до 30",
        year: 2019,
        rating: 3,
        awards: [types_1.EAwards.AcademyAwards],
    },
    {
        id: 21119937,
        title: "Опір",
        year: 2021,
        rating: 4,
        awards: [types_1.EAwards.AcademyAwards, types_1.EAwards.BAFTAAwards],
    },
    {
        id: 21094426,
        title: "Молода",
        year: 2022,
        rating: 4,
        awards: [],
    },
    {
        id: 21090116,
        title: "Справедливость",
        year: 2015,
        rating: 3,
        awards: [],
    },
    {
        id: 21089726,
        title: "Почти женаты",
        year: 2017,
        rating: 2,
        awards: [],
    },
    {
        id: 21579957,
        title: "Табун",
        year: 2019,
        rating: 2,
        awards: [],
    },
    {
        id: 20169606,
        title: "Бункер",
        year: 2014,
        rating: 1,
        awards: [],
    },
];
exports.categories = [
    {
        id: 11,
        films: exports.films,
        title: "Фильмы",
    },
    {
        id: 12,
        films: exports.cartoons,
        title: "Мультики",
    },
    {
        id: 13,
        films: exports.series,
        title: "Сериалы",
    },
];
