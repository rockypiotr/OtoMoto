import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuctionService } from '../../../../core/service/auction.service';
import { Auction } from '../../../../data/schema/auction';

@Component({
  selector: 'app-auction-preview',
  templateUrl: './auction-preview.component.html',
  styleUrls: ['./auction-preview.component.scss'],
})
export class AuctionPreviewComponent implements OnInit {
  auction: Auction = {
    _id: '',
    brand: '',
    model: '',
    vin: '',
    engineCapacity: 0,
    horsePower: 0,
    mileage: 0,
    productionYear: 0,
  };
  auctionId!: string;

  constructor(
    private _route: ActivatedRoute,
    private _auction: AuctionService
  ) {}

  ngOnInit() {
    this.auctionId = this._route.snapshot.params['id'];
    this._auction.fetchById(this.auctionId).subscribe((auction) => {
      this.auction = auction;
    });
  }
}
