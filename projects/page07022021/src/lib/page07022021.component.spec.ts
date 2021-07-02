import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page07022021Component } from './page07022021.component';

describe('Page07022021Component', () => {
  let component: Page07022021Component;
  let fixture: ComponentFixture<Page07022021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page07022021Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page07022021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
