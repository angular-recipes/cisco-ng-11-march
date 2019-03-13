import { CartService } from './../../services/cart.service';
import { BookService } from './../../services/book.service';
import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  books: Book[];
  today = new Date();
  highlightColor = 'blue';

  constructor(
    private bookService: BookService,
    private cartService: CartService,
    private http: Http
  ) {

  }

  rateUp(book) {
    this.bookService
      .rateUp(book)
      .subscribe();
  }

  rateDown(book) {
    this.bookService
      .rateDown(book)
      .subscribe();
  }

  addToCart(book) {
    this.cartService.addToCart(book);
  }

  ngOnInit() {
    this.books = [];
    this.bookService
      .getBooks()
      .subscribe(
        r => this.books = r.json(),
        r => console.log('error happened', r)
      );

    console.log('next step');

  }

  print(t, i) {
    console.log(t.innerHTML, i.value);
  }

}
