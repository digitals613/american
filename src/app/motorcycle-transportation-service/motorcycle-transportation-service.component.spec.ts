import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcycleTransportationServiceComponent } from './motorcycle-transportation-service.component';

describe('MotorcycleTransportationServiceComponent', () => {
  let component: MotorcycleTransportationServiceComponent;
  let fixture: ComponentFixture<MotorcycleTransportationServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcycleTransportationServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorcycleTransportationServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
