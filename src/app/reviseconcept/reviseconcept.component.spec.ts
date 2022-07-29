import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviseconceptComponent } from './reviseconcept.component';

describe('ReviseconceptComponent', () => {
  let component: ReviseconceptComponent;
  let fixture: ComponentFixture<ReviseconceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviseconceptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviseconceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
