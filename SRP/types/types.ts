export interface IUserData {
  id: number;
  historyBooksUser: IBook[];
  userName: string;
  userSurname: string;
}

export interface IUser extends IUserData {
  getHistoryBook(): IBook[];
  addBorrowedBook(book: IBook): void;
  removeBorrowedBook(id: IBook["id"]): void;
}

export interface IBook {
  id: number;
  name: string;
  isAvailable: boolean;
  historyBook: IHistoryBook[];
}

export interface IHistoryBook {
  user: IUser;
  dateFrom: Date;
  dateTo: Date;
}

export interface ILibrary {
  users: IUser[];
  books: IBook[];
  addNewBook(book: IBook): void;
  removeBook(id: IBook["id"]): void;
  getUserById(id: IUser["id"]): IUser;
  getBookByid(id: IBook["id"]): IBook;
  setIssueBook(id: IBook["id"], userId: IUser["id"]): void;
  setReturnBook(id: IBook["id"], userId: IUser["id"]): void;
}
