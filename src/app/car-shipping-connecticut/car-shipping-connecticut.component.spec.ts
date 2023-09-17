import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarShippingConnecticutComponent } from './car-shipping-connecticut.component';

describe('CarShippingConnecticutComponent', () => {
  let component: CarShippingConnecticutComponent;
  let fixture: ComponentFixture<CarShippingConnecticutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarShippingConnecticutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarShippingConnecticutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
