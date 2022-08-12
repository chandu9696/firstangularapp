import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingtabComponent } from './pricingtab.component';

describe('PricingtabComponent', () => {
  let component: PricingtabComponent;
  let fixture: ComponentFixture<PricingtabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingtabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
