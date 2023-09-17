import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VintageAndClassicalVehicleTransportComponent } from './vintage-and-classical-vehicle-transport.component';

describe('VintageAndClassicalVehicleTransportComponent', () => {
  let component: VintageAndClassicalVehicleTransportComponent;
  let fixture: ComponentFixture<VintageAndClassicalVehicleTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VintageAndClassicalVehicleTransportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VintageAndClassicalVehicleTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
