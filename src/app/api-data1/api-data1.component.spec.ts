import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiData1Component } from './api-data1.component';

describe('ApiData1Component', () => {
  let component: ApiData1Component;
  let fixture: ComponentFixture<ApiData1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiData1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiData1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
