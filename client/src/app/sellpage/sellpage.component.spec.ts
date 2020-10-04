import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellpageComponent } from './sellpage.component';

describe('SellpageComponent', () => {
  let component: SellpageComponent;
  let fixture: ComponentFixture<SellpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
