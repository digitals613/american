import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DallasCarShippingComponent } from './dallas-car-shipping.component';

describe('DallasCarShippingComponent', () => {
  let component: DallasCarShippingComponent;
  let fixture: ComponentFixture<DallasCarShippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DallasCarShippingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DallasCarShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
