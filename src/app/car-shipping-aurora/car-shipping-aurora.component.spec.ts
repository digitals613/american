import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarShippingAuroraComponent } from './car-shipping-aurora.component';

describe('CarShippingAuroraComponent', () => {
  let component: CarShippingAuroraComponent;
  let fixture: ComponentFixture<CarShippingAuroraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarShippingAuroraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarShippingAuroraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
