import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  book: Book;

  constructor() { 
    this.book = new Book(
      'The Alchemist',
      'Paulo Cohelo',
      23,
      4
    );
    console.log(this.book);
  }

  ngOnInit() {
  }

}
