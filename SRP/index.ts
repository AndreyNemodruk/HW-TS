import { IBook, IHistoryBook, ILibrary, IUser, IUserData } from "./types/types";

class User implements IUser {
  id: number;
  historyBooksUser: IBook[];
  userName: string;
  userSurname: string;

  constructor({ userName, userSurname, id, historyBooksUser }: IUserData) {
    this.userName = userName;
    this.userSurname = userSurname;
    this.id = id;
    this.historyBooksUser = historyBooksUser;
  }

  getHistoryBook(): IBook[] {
    throw new Error("Method not implemented.");
  }

  addBorrowedBook(book: IBook): void {
    throw new Error("Method not implemented.");
  }
  removeBorrowedBook(id: IBook["id"]) {
    throw new Error("Method not implemented.");
  }
}

class Book implements IBook {
  id: number;
  name: string;
  isAvailable: boolean;
  historyBook: IHistoryBook[];

  constructor({ id, name, historyBook, isAvailable }: IBook) {
    this.id = id;
    this.name = name;
    this.historyBook = historyBook;
    this.isAvailable = isAvailable;
  }
}

class Library implements ILibrary {
  users: IUser[] = [];
  books: IBook[] = [];

  addNewBook(book: IBook): void {
    throw new Error("Method not implemented.");
  }
  removeBook(id: number): void {
    throw new Error("Method not implemented.");
  }
  getUserById(id: number): IUser {
    throw new Error("Method not implemented.");
  }
  getBookByid(id: number): IBook {
    throw new Error("Method not implemented.");
  }
  setIssueBook(id: number, userId: number): void {
    throw new Error("Method not implemented.");
  }
  setReturnBook(id: number, userId: number): void {
    throw new Error("Method not implemented.");
  }
}
