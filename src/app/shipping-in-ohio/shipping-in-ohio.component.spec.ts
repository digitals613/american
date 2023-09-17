import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingInOhioComponent } from './shipping-in-ohio.component';

describe('ShippingInOhioComponent', () => {
  let component: ShippingInOhioComponent;
  let fixture: ComponentFixture<ShippingInOhioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingInOhioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingInOhioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
