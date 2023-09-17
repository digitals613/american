import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoustonCarShippingComponent } from './houston-car-shipping.component';

describe('HoustonCarShippingComponent', () => {
  let component: HoustonCarShippingComponent;
  let fixture: ComponentFixture<HoustonCarShippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoustonCarShippingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoustonCarShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
