import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderpagebuyComponent } from './orderpagebuy.component';

describe('OrderpagebuyComponent', () => {
  let component: OrderpagebuyComponent;
  let fixture: ComponentFixture<OrderpagebuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderpagebuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderpagebuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
