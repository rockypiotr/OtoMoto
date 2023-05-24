import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionItemComponent } from './auction-item.component';
import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AuctionService } from '../../../../../core/service/auction.service';
import { of } from 'rxjs';

describe('AuctionItemComponent', () => {
  let component: AuctionItemComponent;
  let fixture: ComponentFixture<AuctionItemComponent>;
  let http: HttpTestingController;
  let auctionService: AuctionService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuctionItemComponent],
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [AuctionService],
    }).compileComponents();

    fixture = TestBed.createComponent(AuctionItemComponent);
    component = fixture.componentInstance;
    component.data = {
      _id: '646a06a22bcca970ec672b2c',
      brand: '213',
      model: '12312',
      vin: '312',
      productionYear: 3123,
      horsePower: 12312,
      mileage: 312,
      engineCapacity: 3213,
    };
    http = TestBed.inject(HttpTestingController);
    auctionService = TestBed.inject(AuctionService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete button call onDelete function', function () {
    spyOn(component, 'deleteAuction').and.callThrough();
    const deleteButton = fixture.nativeElement.querySelector('#delete');
    const auctionId = component.data._id;

    deleteButton.click();
    fixture.detectChanges();

    expect(component.deleteAuction).toHaveBeenCalledWith(auctionId);
  });

  it('should emit auction ID when deleteAuction is called', function () {
    const auction = component.data;
    spyOn(auctionService, 'deleteById').and.returnValue(of(auction));
    spyOn(component.onDeleteAuction, 'emit');

    component.deleteAuction(auction._id);

    expect(auctionService.deleteById).toHaveBeenCalledWith(auction._id);
    expect(component.onDeleteAuction.emit).toHaveBeenCalledWith(auction._id);
  });

  it('should contain edit button', function () {
    const deleteButton = fixture.nativeElement.querySelector('#edit');

    expect(deleteButton).toBeTruthy();
  });

  it('should edit button call onEdit function', function () {
    spyOn(component, 'editAuction').and.callThrough();
    const editButton = fixture.nativeElement.querySelector('#edit');
    const auction = component.data;

    editButton.click();
    expect(component.editAuction).toHaveBeenCalledWith(auction);
  });

  it('should emit auction when editAuction is called', function () {
    const auction = component.data;
    spyOn(component.onEditAuction, 'emit');

    component.editAuction(auction);

    expect(component.onEditAuction.emit).toHaveBeenCalledWith(auction);
  });
});
