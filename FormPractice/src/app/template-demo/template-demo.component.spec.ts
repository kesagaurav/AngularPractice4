import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDemoComponent } from './template-demo.component';

describe('TemplateDemoComponent', () => {
  let component: TemplateDemoComponent;
  let fixture: ComponentFixture<TemplateDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateDemoComponent]
    });
    fixture = TestBed.createComponent(TemplateDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
