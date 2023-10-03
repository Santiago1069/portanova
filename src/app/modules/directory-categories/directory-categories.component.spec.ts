import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryCategoriesComponent } from './directory-categories.component';

describe('DirectoryCategoriesComponent', () => {
  let component: DirectoryCategoriesComponent;
  let fixture: ComponentFixture<DirectoryCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectoryCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoryCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
