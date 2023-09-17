import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaliforniaToTexasComponent } from './california-to-texas.component';

describe('CaliforniaToTexasComponent', () => {
  let component: CaliforniaToTexasComponent;
  let fixture: ComponentFixture<CaliforniaToTexasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaliforniaToTexasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaliforniaToTexasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
