import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthRateComponent } from './health-rate.component';

describe('HealthRateComponent', () => {
  let component: HealthRateComponent;
  let fixture: ComponentFixture<HealthRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
