import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MichiganCarShippingComponent } from './michigan-car-shipping.component';

describe('MichiganCarShippingComponent', () => {
  let component: MichiganCarShippingComponent;
  let fixture: ComponentFixture<MichiganCarShippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MichiganCarShippingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MichiganCarShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
