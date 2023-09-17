import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorToDoorAutoTransportComponent } from './door-to-door-auto-transport.component';

describe('DoorToDoorAutoTransportComponent', () => {
  let component: DoorToDoorAutoTransportComponent;
  let fixture: ComponentFixture<DoorToDoorAutoTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoorToDoorAutoTransportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoorToDoorAutoTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
