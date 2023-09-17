import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingInOklahomaComponent } from './shipping-in-oklahoma.component';

describe('ShippingInOklahomaComponent', () => {
  let component: ShippingInOklahomaComponent;
  let fixture: ComponentFixture<ShippingInOklahomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingInOklahomaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingInOklahomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
