import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionListComponent } from './auction-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuctionEditComponent } from './auction-edit/auction-edit.component';
import { AuctionItemComponent } from './auction-item/auction-item.component';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { AuctionService } from '../../../../core/service/auction.service';
import { Auction } from '../../../../data/schema/auction';
import { of } from 'rxjs';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';

describe('AuctionListComponent', () => {
  let component: AuctionListComponent;
  let fixture: ComponentFixture<AuctionListComponent>;
  let auctionService: AuctionService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AuctionListComponent,
        AuctionEditComponent,
        AuctionItemComponent,
      ],
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
        DialogModule,
        ButtonModule,
        ReactiveFormsModule,
        TranslateModule.forRoot({
          defaultLanguage: 'pl',
        }),
      ],
      providers: [AuctionService, TranslateService],
    }).compileComponents();

    fixture = TestBed.createComponent(AuctionListComponent);
    component = fixture.componentInstance;
    auctionService = TestBed.inject(AuctionService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch auctions on initialization', () => {
    const auctions: Auction[] = [
      {
        _id: '1',
        brand: 'Brand 1',
        model: 'Model 1',
        vin: 'VIN 1',
        engineCapacity: 2.0,
        horsePower: 200,
        mileage: 1000,
        productionYear: 2021,
      },
      {
        _id: '2',
        brand: 'Brand 2',
        model: 'Model 2',
        vin: 'VIN 2',
        engineCapacity: 2.2,
        horsePower: 220,
        mileage: 2000,
        productionYear: 2022,
      },
    ];
    spyOn(auctionService, 'fetch').and.returnValue(of(auctions));

    component.ngOnInit();

    expect(auctionService.fetch).toHaveBeenCalled();
    expect(component.auctions).toEqual(auctions);
  });

  it('should remove auction when onDeleteAuction is called with valid auctionId', () => {
    const auctionId = '1';
    const initialAuctions: Auction[] = [
      {
        _id: '1',
        brand: 'Brand 1',
        model: 'Model 1',
        vin: 'VIN 1',
        engineCapacity: 2.0,
        horsePower: 200,
        mileage: 1000,
        productionYear: 2021,
      },
      {
        _id: '2',
        brand: 'Brand 2',
        model: 'Model 2',
        vin: 'VIN 2',
        engineCapacity: 2.2,
        horsePower: 220,
        mileage: 2000,
        productionYear: 2022,
      },
    ];
    component.auctions = initialAuctions;

    component.onDeleteAuction(auctionId);

    expect(component.auctions.length).toBe(1);
    expect(component.auctions[0]._id).toBe('2');
  });

  it('should not remove auction when onDeleteAuction is called with invalid auctionId', () => {
    const auctionId = '3';
    const initialAuctions: Auction[] = [
      {
        _id: '1',
        brand: 'Brand 1',
        model: 'Model 1',
        vin: 'VIN 1',
        engineCapacity: 2.0,
        horsePower: 200,
        mileage: 1000,
        productionYear: 2021,
      },
      {
        _id: '2',
        brand: 'Brand 2',
        model: 'Model 2',
        vin: 'VIN 2',
        engineCapacity: 2.2,
        horsePower: 220,
        mileage: 2000,
        productionYear: 2022,
      },
    ];
    component.auctions = initialAuctions;

    component.onDeleteAuction(auctionId);

    expect(component.auctions.length).toBe(2);
  });

  it('should set isAddingAuction and editedAuction when onEditAuction is called with valid auction', () => {
    const auction: Auction = {
      _id: '1',
      brand: 'Brand 1',
      model: 'Model 1',
      vin: 'VIN 1',
      engineCapacity: 2.0,
      horsePower: 200,
      mileage: 1000,
      productionYear: 2021,
    };
    component.isAddingAuction = true;

    component.onEditAuction(auction);

    expect(component.isAddingAuction).toBe(false);
    expect(component.editedAuction).toEqual(auction);
    expect(component.displayEditAuctionDialog).toBe(true);
  });

  it('should set isAddingAuction when onEditAuction is called without auction', () => {
    component.isAddingAuction = false;

    component.onEditAuction();

    expect(component.isAddingAuction).toBe(true);
    expect(component.displayEditAuctionDialog).toBe(true);
  });

  it('should add auction when onAddAuction is called', () => {
    const auction: Auction = {
      _id: '1',
      brand: 'Brand 1',
      model: 'Model 1',
      vin: 'VIN 1',
      engineCapacity: 2.0,
      horsePower: 200,
      mileage: 1000,
      productionYear: 2021,
    };

    component.addAuction(auction);

    expect(component.auctions.length).toBe(1);
    expect(component.auctions[0]).toEqual(auction);
  });
});
