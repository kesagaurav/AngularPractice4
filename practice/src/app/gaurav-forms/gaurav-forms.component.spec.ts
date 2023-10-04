import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GauravFormsComponent } from './gaurav-forms.component';

describe('GauravFormsComponent', () => {
  let component: GauravFormsComponent;
  let fixture: ComponentFixture<GauravFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GauravFormsComponent]
    });
    fixture = TestBed.createComponent(GauravFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
