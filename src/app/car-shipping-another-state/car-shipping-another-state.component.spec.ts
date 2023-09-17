import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarShippingAnotherStateComponent } from './car-shipping-another-state.component';

describe('CarShippingAnotherStateComponent', () => {
  let component: CarShippingAnotherStateComponent;
  let fixture: ComponentFixture<CarShippingAnotherStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarShippingAnotherStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarShippingAnotherStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
