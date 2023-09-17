import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarShippingFaloridaComponent } from './car-shipping-falorida.component';

describe('CarShippingFaloridaComponent', () => {
  let component: CarShippingFaloridaComponent;
  let fixture: ComponentFixture<CarShippingFaloridaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarShippingFaloridaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarShippingFaloridaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
