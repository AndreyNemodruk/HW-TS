import { IFilm, EAwards, ICategory } from "../types/types";
export const films: IFilm[] = [
  {
    id: 22235056,
    title: "Схватка с дьяволом",
    year: 2023,
    rating: 5,
    awards: [EAwards.BAFTAAwards],
  },
  {
    id: 22359426,
    title: "Логово шпиона",
    year: 2023,
    rating: 4,
    awards: [EAwards.EmmyAwards, EAwards.BAFTAAwards],
  },
  {
    id: 22235046,
    title: "Время расплаты",
    year: 2021,
    rating: 3,
    awards: [EAwards.EmmyAwards, EAwards.BAFTAAwards],
  },
  {
    id: 21749986,
    title: "Заложники безумия",
    year: 2021,
    rating: 3,
    awards: [EAwards.EmmyAwards, EAwards.BAFTAAwards, EAwards.MTVMovieAwards],
  },
  {
    id: 22155006,
    title: "Тайна Меркатора",
    year: 2019,
    rating: 3,
    awards: [],
  },
];

export const cartoons: IFilm[] = [
  {
    id: 22356756,
    title: "Пернатый патруль",
    year: 2018,
    rating: 2,
    awards: [EAwards.GoldenGlobes],
  },
  {
    id: 13084145,
    title: "Огрики",
    year: 2013,
    rating: 3,
    awards: [EAwards.EmmyAwards],
  },
  {
    id: 22359506,
    title: "Приключения Арахиса и Поросенка",
    year: 2015,
    rating: 3,
    awards: [EAwards.EmmyAwards, EAwards.GoldenGlobes],
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
    awards: [EAwards.AcademyAwards, EAwards.EmmyAwards],
  },
];

export const series: IFilm[] = [
  {
    id: 22484096,
    title: "Успеть до 30",
    year: 2019,
    rating: 3,
    awards: [EAwards.AcademyAwards],
  },
  {
    id: 21119937,
    title: "Опір",
    year: 2021,
    rating: 4,
    awards: [EAwards.AcademyAwards, EAwards.BAFTAAwards],
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

export const categories: ICategory[] = [
  {
    id: 11,
    films: films,
    title: "Фильмы",
  },
  {
    id: 12,
    films: cartoons,
    title: "Мультики",
  },
  {
    id: 13,
    films: series,
    title: "Сериалы",
  },
];
