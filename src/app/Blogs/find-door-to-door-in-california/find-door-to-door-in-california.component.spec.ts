import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDoorToDoorInCaliforniaComponent } from './find-door-to-door-in-california.component';

describe('FindDoorToDoorInCaliforniaComponent', () => {
  let component: FindDoorToDoorInCaliforniaComponent;
  let fixture: ComponentFixture<FindDoorToDoorInCaliforniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindDoorToDoorInCaliforniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindDoorToDoorInCaliforniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
