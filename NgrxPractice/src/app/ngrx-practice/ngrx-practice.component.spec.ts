import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxPracticeComponent } from './ngrx-practice.component';

describe('NgrxPracticeComponent', () => {
  let component: NgrxPracticeComponent;
  let fixture: ComponentFixture<NgrxPracticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgrxPracticeComponent]
    });
    fixture = TestBed.createComponent(NgrxPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
