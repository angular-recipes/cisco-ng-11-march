import { Book } from './../models/book';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[];

  constructor() {
    this.books = [
      new Book(
        'The Alchemist',
        'Paulo Cohelo',
        23,
        4
      ),
      new Book(
        'The monk who sold his ferrari',
        'Robin Sharma',
        43,
        2
      ),
      new Book(
        'Five point someone',
        'Chetan Bhagat',
        11,
        1
      ),
      new Book(
        '4 hour work week',
        'Tim Ferris',
        24,
        5
      )
    ];
  }

  getBooks() {
    return this.books;
  }

  getBookById(id) {
    return this.books.find(b => b.id == id);
  }

  rateUp(book: Book) {
    if (book.rating < 5)
      book.rating++;
  }

  rateDown(book: Book) {
    if (book.rating > 1)
      book.rating--;
  }
}
