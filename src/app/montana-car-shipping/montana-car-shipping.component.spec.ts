import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontanaCarShippingComponent } from './montana-car-shipping.component';

describe('MontanaCarShippingComponent', () => {
  let component: MontanaCarShippingComponent;
  let fixture: ComponentFixture<MontanaCarShippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MontanaCarShippingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MontanaCarShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
