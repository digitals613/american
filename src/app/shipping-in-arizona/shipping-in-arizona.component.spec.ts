import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingInArizonaComponent } from './shipping-in-arizona.component';

describe('ShippingInArizonaComponent', () => {
  let component: ShippingInArizonaComponent;
  let fixture: ComponentFixture<ShippingInArizonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingInArizonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingInArizonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
