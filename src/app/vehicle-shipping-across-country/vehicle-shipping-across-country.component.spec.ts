import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleShippingAcrossCountryComponent } from './vehicle-shipping-across-country.component';

describe('VehicleShippingAcrossCountryComponent', () => {
  let component: VehicleShippingAcrossCountryComponent;
  let fixture: ComponentFixture<VehicleShippingAcrossCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleShippingAcrossCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleShippingAcrossCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
