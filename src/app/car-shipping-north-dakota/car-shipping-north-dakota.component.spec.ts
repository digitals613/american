import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarShippingNorthDakotaComponent } from './car-shipping-north-dakota.component';

describe('CarShippingNorthDakotaComponent', () => {
  let component: CarShippingNorthDakotaComponent;
  let fixture: ComponentFixture<CarShippingNorthDakotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarShippingNorthDakotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarShippingNorthDakotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
