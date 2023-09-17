import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindgoodcompanyComponent } from './findgoodcompany.component';

describe('FindgoodcompanyComponent', () => {
  let component: FindgoodcompanyComponent;
  let fixture: ComponentFixture<FindgoodcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindgoodcompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindgoodcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
