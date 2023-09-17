import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowLongShipCarComponent } from './how-long-ship-car.component';

describe('HowLongShipCarComponent', () => {
  let component: HowLongShipCarComponent;
  let fixture: ComponentFixture<HowLongShipCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowLongShipCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowLongShipCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
