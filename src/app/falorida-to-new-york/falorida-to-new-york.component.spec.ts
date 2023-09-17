import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaloridaToNewYorkComponent } from './falorida-to-new-york.component';

describe('FaloridaToNewYorkComponent', () => {
  let component: FaloridaToNewYorkComponent;
  let fixture: ComponentFixture<FaloridaToNewYorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaloridaToNewYorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaloridaToNewYorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
