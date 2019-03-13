import { Book } from './../../models/book';
import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-details-page',
  templateUrl: './book-details-page.component.html',
  styleUrls: ['./book-details-page.component.css']
})
export class BookDetailsPageComponent implements OnInit {
  book: Book;
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.bookService
      .getBookById(id)
      .subscribe(res => this.book = res.json());
  }

  goHome() {
    this.router.navigate(['/home']);
  }

}
