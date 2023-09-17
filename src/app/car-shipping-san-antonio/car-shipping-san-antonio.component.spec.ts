import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarShippingSanAntonioComponent } from './car-shipping-san-antonio.component';

describe('CarShippingSanAntonioComponent', () => {
  let component: CarShippingSanAntonioComponent;
  let fixture: ComponentFixture<CarShippingSanAntonioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarShippingSanAntonioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarShippingSanAntonioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
