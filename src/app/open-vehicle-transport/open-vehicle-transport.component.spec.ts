import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenVehicleTransportComponent } from './open-vehicle-transport.component';

describe('OpenVehicleTransportComponent', () => {
  let component: OpenVehicleTransportComponent;
  let fixture: ComponentFixture<OpenVehicleTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenVehicleTransportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenVehicleTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
