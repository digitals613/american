import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpageAutoComponent } from './landingpage-auto.component';

describe('LandingpageAutoComponent', () => {
  let component: LandingpageAutoComponent;
  let fixture: ComponentFixture<LandingpageAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingpageAutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingpageAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
