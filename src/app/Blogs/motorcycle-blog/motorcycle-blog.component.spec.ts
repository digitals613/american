import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcycleBlogComponent } from './motorcycle-blog.component';

describe('MotorcycleBlogComponent', () => {
  let component: MotorcycleBlogComponent;
  let fixture: ComponentFixture<MotorcycleBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcycleBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorcycleBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
