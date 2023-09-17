import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtahCarShippingComponent } from './utah-car-shipping.component';

describe('UtahCarShippingComponent', () => {
  let component: UtahCarShippingComponent;
  let fixture: ComponentFixture<UtahCarShippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtahCarShippingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtahCarShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
