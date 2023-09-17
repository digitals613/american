import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarylandCarShippingComponent } from './maryland-car-shipping.component';

describe('MarylandCarShippingComponent', () => {
  let component: MarylandCarShippingComponent;
  let fixture: ComponentFixture<MarylandCarShippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarylandCarShippingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarylandCarShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
