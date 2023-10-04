import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Logincomponet2Component } from './logincomponet2.component';

describe('Logincomponet2Component', () => {
  let component: Logincomponet2Component;
  let fixture: ComponentFixture<Logincomponet2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Logincomponet2Component]
    });
    fixture = TestBed.createComponent(Logincomponet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
