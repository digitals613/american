import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarShippinNorthCarolinaComponent } from './car-shippin-north-carolina.component';

describe('CarShippinNorthCarolinaComponent', () => {
  let component: CarShippinNorthCarolinaComponent;
  let fixture: ComponentFixture<CarShippinNorthCarolinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarShippinNorthCarolinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarShippinNorthCarolinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
