import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidesServicesComponent } from './provides-services.component';

describe('ProvidesServicesComponent', () => {
  let component: ProvidesServicesComponent;
  let fixture: ComponentFixture<ProvidesServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvidesServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidesServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
