import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarShippingWisconsinComponent } from './car-shipping-wisconsin.component';

describe('CarShippingWisconsinComponent', () => {
  let component: CarShippingWisconsinComponent;
  let fixture: ComponentFixture<CarShippingWisconsinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarShippingWisconsinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarShippingWisconsinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
