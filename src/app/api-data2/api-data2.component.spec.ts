import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiData2Component } from './api-data2.component';

describe('ApiData2Component', () => {
  let component: ApiData2Component;
  let fixture: ComponentFixture<ApiData2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiData2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiData2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
