import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() book;
  @Input() hideButtons;
  @Input() showTitleAsText;
  @Output() rateUpBtnClick = new EventEmitter();
  @Output() rateDownBtnClick = new EventEmitter();
  @Output() addToCartBtnClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  onRateUpBtnClick() {
    this.rateUpBtnClick.emit(this.book);
  }
  
  onRateDownBtnClick() {
    this.rateDownBtnClick.emit(this.book);
  }

  onAddToCartBtnClick() {
    this.addToCartBtnClick.emit(this.book);
  }

}
