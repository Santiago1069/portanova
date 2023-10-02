import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPortafolioComponent } from './detail-portafolio.component';

describe('DetailPortafolioComponent', () => {
  let component: DetailPortafolioComponent;
  let fixture: ComponentFixture<DetailPortafolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPortafolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPortafolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
