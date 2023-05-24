import { TestBed } from '@angular/core/testing';

import { AuctionService } from './auction.service';
import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Auction } from '../../data/schema/auction';
import { FormControl, FormGroup } from '@angular/forms';

describe('AuctionService', () => {
  let service: AuctionService;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientModule, HttpClientTestingModule],
    }).compileComponents();

    service = TestBed.inject(AuctionService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch auctions', () => {
    const mockAuctions: Auction[] = [
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

    service.fetch().subscribe((auctions) => {
      expect(auctions).toEqual(mockAuctions);
    });

    const req = httpTestingController.expectOne(
      'http://localhost:5000/api/auction/'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(mockAuctions);
  });

  it('should create auction', () => {
    const form = new FormGroup({
      brand: new FormControl('Brand 1'),
      model: new FormControl('Model 1'),
      vin: new FormControl('VIN 1'),
      productionYear: new FormControl(2021),
      horsePower: new FormControl(200),
      mileage: new FormControl(1000),
      engineCapacity: new FormControl(2.0),
    });
    const mockAuction: Auction = {
      _id: '1',
      brand: 'Brand 1',
      model: 'Model 1',
      vin: 'VIN 1',
      engineCapacity: 2.0,
      horsePower: 200,
      mileage: 1000,
      productionYear: 2021,
    };

    service.create(form).subscribe((auction) => {
      expect(auction).toEqual(mockAuction);
    });

    const req = httpTestingController.expectOne(
      'http://localhost:5000/api/auction/'
    );
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(form.value);
    req.flush(mockAuction);
  });

  it('should delete auction by id', () => {
    const auctionId = '1';
    const mockAuction: Auction = {
      _id: '1',
      brand: 'Brand 1',
      model: 'Model 1',
      vin: 'VIN 1',
      engineCapacity: 2.0,
      horsePower: 200,
      mileage: 1000,
      productionYear: 2021,
    };

    service.deleteById(auctionId).subscribe((auction) => {
      expect(auction).toEqual(mockAuction);
    });

    const req = httpTestingController.expectOne(
      'http://localhost:5000/api/auction/1'
    );
    expect(req.request.method).toEqual('DELETE');
    req.flush(mockAuction);
  });

  it('should edit auction by id', () => {
    const auctionId = '1';
    const form = new FormGroup({
      brand: new FormControl('Brand 1'),
      model: new FormControl('Model 1'),
      vin: new FormControl('VIN 1'),
      productionYear: new FormControl(2021),
      horsePower: new FormControl(200),
      mileage: new FormControl(1000),
      engineCapacity: new FormControl(2.0),
    });
    let mockAuction: Auction;
    mockAuction = {
      _id: '1',
      brand: 'Brand 1',
      model: 'Model 1',
      vin: 'VIN 1',
      engineCapacity: 2.0,
      horsePower: 200,
      mileage: 1000,
      productionYear: 2021,
    };

    service.editById(auctionId, form).subscribe((auction) => {
      expect(auction).toEqual(mockAuction);
    });

    const req = httpTestingController.expectOne(
      'http://localhost:5000/api/auction/1'
    );
    expect(req.request.method).toEqual('PATCH');
    expect(req.request.body).toEqual({
      brand: form.value.brand,
      model: form.value.model,
      vin: form.value.vin,
      productionYear: form.value.productionYear,
      horsePower: form.value.horsePower,
      mileage: form.value.mileage,
      engineCapacity: form.value.engineCapacity,
    });
    req.flush(mockAuction);
  });
});
