import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeFormsComponent } from './practice-forms.component';

describe('PracticeFormsComponent', () => {
  let component: PracticeFormsComponent;
  let fixture: ComponentFixture<PracticeFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PracticeFormsComponent]
    });
    fixture = TestBed.createComponent(PracticeFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
