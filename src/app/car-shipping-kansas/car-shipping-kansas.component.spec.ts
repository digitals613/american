import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarShippingKansasComponent } from './car-shipping-kansas.component';

describe('CarShippingKansasComponent', () => {
  let component: CarShippingKansasComponent;
  let fixture: ComponentFixture<CarShippingKansasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarShippingKansasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarShippingKansasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
