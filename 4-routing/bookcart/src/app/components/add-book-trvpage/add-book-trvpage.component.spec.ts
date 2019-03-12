import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookTRVPageComponent } from './add-book-trvpage.component';

describe('AddBookTRVPageComponent', () => {
  let component: AddBookTRVPageComponent;
  let fixture: ComponentFixture<AddBookTRVPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBookTRVPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookTRVPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
