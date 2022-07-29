import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavHotelComponent } from './fav-hotel.component';

describe('FavHotelComponent', () => {
  let component: FavHotelComponent;
  let fixture: ComponentFixture<FavHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
