import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarBlogComponent } from './car-blog.component';

describe('CarBlogComponent', () => {
  let component: CarBlogComponent;
  let fixture: ComponentFixture<CarBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
