import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeorgiaCarShippingComponent } from './georgia-car-shipping.component';

describe('GeorgiaCarShippingComponent', () => {
  let component: GeorgiaCarShippingComponent;
  let fixture: ComponentFixture<GeorgiaCarShippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeorgiaCarShippingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeorgiaCarShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
