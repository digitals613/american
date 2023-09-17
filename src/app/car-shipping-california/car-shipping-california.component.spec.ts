import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarShippingCaliforniaComponent } from './car-shipping-california.component';

describe('CarShippingCaliforniaComponent', () => {
  let component: CarShippingCaliforniaComponent;
  let fixture: ComponentFixture<CarShippingCaliforniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarShippingCaliforniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarShippingCaliforniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
