import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatTransportationServiceComponent } from './boat-transportation-service.component';

describe('BoatTransportationServiceComponent', () => {
  let component: BoatTransportationServiceComponent;
  let fixture: ComponentFixture<BoatTransportationServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatTransportationServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatTransportationServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
