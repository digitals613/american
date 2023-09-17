import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarShippingIllinoisComponent } from './car-shipping-illinois.component';

describe('CarShippingIllinoisComponent', () => {
  let component: CarShippingIllinoisComponent;
  let fixture: ComponentFixture<CarShippingIllinoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarShippingIllinoisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarShippingIllinoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
