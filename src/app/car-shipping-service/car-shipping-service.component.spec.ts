import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarShippingServiceComponent } from './car-shipping-service.component';

describe('CarShippingServiceComponent', () => {
  let component: CarShippingServiceComponent;
  let fixture: ComponentFixture<CarShippingServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarShippingServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarShippingServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
