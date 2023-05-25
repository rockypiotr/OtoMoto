import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionMainDetailsComponent } from './auction-main-details.component';

describe('AuctionMainDetailsComponent', () => {
  let component: AuctionMainDetailsComponent;
  let fixture: ComponentFixture<AuctionMainDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuctionMainDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuctionMainDetailsComponent);
    component = fixture.componentInstance;

    component.auction = {
      _id: '646a05f82bcca970ec672b20',
      brand: 'Mercedes-Benz',
      model: 'Klasa E',
      vin: '1ZVBP8CF4E5281150',
      productionYear: 2022,
      horsePower: 120,
      mileage: 150000,
      engineCapacity: 2500,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
