import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleShippingCostComponent } from './vehicle-shipping-cost.component';

describe('VehicleShippingCostComponent', () => {
  let component: VehicleShippingCostComponent;
  let fixture: ComponentFixture<VehicleShippingCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleShippingCostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleShippingCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
