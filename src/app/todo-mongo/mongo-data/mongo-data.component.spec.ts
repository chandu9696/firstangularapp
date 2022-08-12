import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MongoDataComponent } from './mongo-data.component';

describe('MongoDataComponent', () => {
  let component: MongoDataComponent;
  let fixture: ComponentFixture<MongoDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MongoDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MongoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
