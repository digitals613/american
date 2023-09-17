import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleVehiclesTransportComponent } from './multiple-vehicles-transport.component';

describe('MultipleVehiclesTransportComponent', () => {
  let component: MultipleVehiclesTransportComponent;
  let fixture: ComponentFixture<MultipleVehiclesTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleVehiclesTransportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleVehiclesTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
