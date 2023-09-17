import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorToDoorTransportationComponent } from './door-to-door-transportation.component';

describe('DoorToDoorTransportationComponent', () => {
  let component: DoorToDoorTransportationComponent;
  let fixture: ComponentFixture<DoorToDoorTransportationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoorToDoorTransportationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoorToDoorTransportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
