import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantUrgentComponent } from './important-urgent.component';

describe('ImportantUrgentComponent', () => {
  let component: ImportantUrgentComponent;
  let fixture: ComponentFixture<ImportantUrgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportantUrgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportantUrgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
