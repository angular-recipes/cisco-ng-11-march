import { Book } from './../../models/book';
import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  books: Book[];
  firstBookRating: number;
  bookService;
  constructor(bookService: BookService) {
    this.bookService = bookService;
  }

  ngOnInit() {
    this.firstBookRating = this.bookService.books[0].rating;
    this.books = this.bookService.books;
  }

}
