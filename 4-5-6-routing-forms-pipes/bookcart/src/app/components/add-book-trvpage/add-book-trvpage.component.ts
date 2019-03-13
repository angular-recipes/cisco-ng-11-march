import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-book-trvpage',
  templateUrl: './add-book-trvpage.component.html',
  styleUrls: ['./add-book-trvpage.component.css']
})
export class AddBookTRVPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  save(title, author, price, rating) {
    let book = new Book(
      title.value,
      author.value,
      +price.value,
      +rating.value
    );
    console.log(book);
  }

}
