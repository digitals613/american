import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingInLouisianaComponent } from './shipping-in-louisiana.component';

describe('ShippingInLouisianaComponent', () => {
  let component: ShippingInLouisianaComponent;
  let fixture: ComponentFixture<ShippingInLouisianaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingInLouisianaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingInLouisianaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
