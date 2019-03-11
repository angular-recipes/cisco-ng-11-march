import { BookService } from './../../services/book.service';
import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  books: Book[];
  bookService: BookService;

  constructor(bookService: BookService) {
    this.bookService = bookService;
  }

  rateUp(book) {
    if(book.rating < 5)
      book.rating++;
  }

  rateDown(book) {
    if(book.rating > 1)
      book.rating--;
  }

  ngOnInit() {
    this.books = this.bookService.books;
  }

}
