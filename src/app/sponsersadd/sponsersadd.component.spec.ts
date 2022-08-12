import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsersaddComponent } from './sponsersadd.component';

describe('SponsersaddComponent', () => {
  let component: SponsersaddComponent;
  let fixture: ComponentFixture<SponsersaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsersaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsersaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
