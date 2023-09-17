import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeantoshipacarComponent } from './meantoshipacar.component';

describe('MeantoshipacarComponent', () => {
  let component: MeantoshipacarComponent;
  let fixture: ComponentFixture<MeantoshipacarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeantoshipacarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeantoshipacarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
