import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFormsModuleComponent } from './employee-forms-module.component';

describe('EmployeeFormsModuleComponent', () => {
  let component: EmployeeFormsModuleComponent;
  let fixture: ComponentFixture<EmployeeFormsModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeFormsModuleComponent]
    });
    fixture = TestBed.createComponent(EmployeeFormsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
