import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostCaliforniaToTexasComponent } from './cost-california-to-texas.component';

describe('CostCaliforniaToTexasComponent', () => {
  let component: CostCaliforniaToTexasComponent;
  let fixture: ComponentFixture<CostCaliforniaToTexasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostCaliforniaToTexasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostCaliforniaToTexasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
