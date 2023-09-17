import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaysYouCanDoComponent } from './ways-you-can-do.component';

describe('WaysYouCanDoComponent', () => {
  let component: WaysYouCanDoComponent;
  let fixture: ComponentFixture<WaysYouCanDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaysYouCanDoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaysYouCanDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
