import { CartService } from './../../services/cart.service';
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
  today = new Date();
  highlightColor = 'blue';

  constructor(
    private bookService: BookService,
    private cartService: CartService  
  ) {
    
  }

  rateUp(book) {
    this.bookService.rateUp(book);
  }

  rateDown(book) {
    this.bookService.rateDown(book);
  }

  addToCart(book) {
    this.cartService.addToCart(book);
  }

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

  print(t, i) {
    console.log(t.innerHTML, i.value);
  }

}
