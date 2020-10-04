import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderpagesellComponent } from './orderpagesell.component';

describe('OrderpagesellComponent', () => {
  let component: OrderpagesellComponent;
  let fixture: ComponentFixture<OrderpagesellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderpagesellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderpagesellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
