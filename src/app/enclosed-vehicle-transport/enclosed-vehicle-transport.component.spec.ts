import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnclosedVehicleTransportComponent } from './enclosed-vehicle-transport.component';

describe('EnclosedVehicleTransportComponent', () => {
  let component: EnclosedVehicleTransportComponent;
  let fixture: ComponentFixture<EnclosedVehicleTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnclosedVehicleTransportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnclosedVehicleTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
