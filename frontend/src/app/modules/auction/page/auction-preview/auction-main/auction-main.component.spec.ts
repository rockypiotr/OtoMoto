import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionMainComponent } from './auction-main.component';
import { CardModule } from 'primeng/card';
import { AuctionMainDetailsComponent } from './auction-main-details/auction-main-details.component';
import { AuctionMainImageComponent } from './auction-main-image/auction-main-image.component';

describe('AuctionMainComponent', () => {
  let component: AuctionMainComponent;
  let fixture: ComponentFixture<AuctionMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AuctionMainComponent,
        AuctionMainDetailsComponent,
        AuctionMainImageComponent,
      ],
      imports: [CardModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AuctionMainComponent);
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
