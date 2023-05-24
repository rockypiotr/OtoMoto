import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionEditComponent } from './auction-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DialogModule } from 'primeng/dialog';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuctionService } from '../../../../../core/service/auction.service';
import { Auction } from '../../../../../data/schema/auction';
import { of } from 'rxjs';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';

describe('AuctionEditComponent', () => {
  let component: AuctionEditComponent;
  let fixture: ComponentFixture<AuctionEditComponent>;
  let auctionService: AuctionService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuctionEditComponent],
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

    fixture = TestBed.createComponent(AuctionEditComponent);
    component = fixture.componentInstance;
    auctionService = TestBed.inject(AuctionService);
    fixture.detectChanges();
  });

  beforeEach(() => {
    component.auctionForm = new FormGroup({
      brand: new FormControl('Test Brand'),
      model: new FormControl('Test Model'),
      vin: new FormControl('Test VIN'),
      productionYear: new FormControl(2021),
      horsePower: new FormControl(200),
      mileage: new FormControl(1000),
      engineCapacity: new FormControl(2.0),
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit auction when addAuction is called', () => {
    const auction: Auction = {
      _id: 'exampleId',
      brand: 'Test Brand',
      model: 'Test Model',
      vin: 'Test VIN',
      productionYear: 2021,
      horsePower: 200,
      mileage: 1000,
      engineCapacity: 2.0,
    };
    spyOn(auctionService, 'create').and.returnValue(of(auction));
    spyOn(component.onAddAuction, 'emit');

    component.addAuction(component.auctionForm);

    expect(auctionService.create).toHaveBeenCalledWith(component.auctionForm);
    expect(component.onAddAuction.emit).toHaveBeenCalledWith(auction);
    expect(component.visible).toBeFalsy();
  });

  it('should edit auction when editAuction is called', () => {
    const auction: Auction = {
      _id: 'exampleId',
      brand: 'Test Brand',
      model: 'Test Model',
      vin: 'Test VIN',
      productionYear: 2021,
      horsePower: 200,
      mileage: 1000,
      engineCapacity: 2.0,
    };
    spyOn(auctionService, 'editById').and.returnValue(of(auction));
    component.auction = auction;

    component.editAuction(component.auctionForm);

    expect(auctionService.editById).toHaveBeenCalledWith(
      auction._id,
      component.auctionForm
    );
  });

  it('should close dialog when addAuction is called', function () {
    const auction: Auction = {
      _id: 'exampleId',
      brand: 'Test Brand',
      model: 'Test Model',
      vin: 'Test VIN',
      productionYear: 2021,
      horsePower: 200,
      mileage: 1000,
      engineCapacity: 2.0,
    };
    const visible: boolean = component.visible;

    component.auction = auction;
    component.addAuction(component.auctionForm);
    expect(visible).toBeFalsy();
  });

  it('should close dialog when editAuction is called', function () {
    const auction: Auction = {
      _id: 'exampleId',
      brand: 'Test Brand',
      model: 'Test Model',
      vin: 'Test VIN',
      productionYear: 2021,
      horsePower: 200,
      mileage: 1000,
      engineCapacity: 2.0,
    };
    const visible: boolean = component.visible;

    component.auction = auction;
    component.editAuction(component.auctionForm);
    expect(visible).toBeFalsy();
  });
});
