import { environment } from './../../environments/environment';
import { Book } from './../models/book';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[];
  url = environment.apiUrl;

  constructor(private http: Http) {
  }

  getBooks() {
    return this.http.get(this.url);
  }

  getBookById(id) {
    return this.http.get(this.url + id);
  }

  addBook(book: Book) {
    return this.http.post(this.url, book);
  }

  rateUp(book: Book) {
    if (book.rating < 5)
      book.rating++;
    return this.http.put(this.url + book.id, book);
  }

  rateDown(book: Book) {
    if (book.rating > 1)
      book.rating--;
    return this.http.put(this.url + book.id, book);
  }
}
