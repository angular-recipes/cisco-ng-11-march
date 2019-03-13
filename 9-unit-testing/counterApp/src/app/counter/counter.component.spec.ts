import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let componentDOM: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    componentDOM = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have counter as 0 at start', () => {
    let div = componentDOM.querySelector('div');
    expect(div.innerHTML).toBe('0');

    expect(component.count).toBe(0);
  });

  it('should increment properly', () => {
    let btn = componentDOM.querySelectorAll('button')[0];
    btn.click();
    fixture.detectChanges();
    let div = componentDOM.querySelector('div');
    expect(div.innerHTML).toBe('1');
    component.inc();
    fixture.detectChanges();
    expect(div.innerHTML).toBe('2');
    expect(component.count).toBe(2);
  });
});
