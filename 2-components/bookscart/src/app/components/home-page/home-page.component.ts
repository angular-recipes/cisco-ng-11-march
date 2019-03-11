import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  books: Book[];

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

  rateUp(book) {
    if(book.rating < 5)
      book.rating++;
  }

  rateDown(book) {
    if(book.rating > 1)
      book.rating--;
  }

  ngOnInit() {
  }

}
