import { Component, OnInit } from '@angular/core';
import { Auction } from '../../../../data/schema/auction';
import { AuctionService } from '../../../../core/service/auction.service';
import { SelectItem } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-auction-list',
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.scss'],
})
export class AuctionListComponent implements OnInit {
  auctions: Auction[] = [];
  displayEditAuctionDialog: boolean = false;
  editedAuction: Auction = {
    _id: '',
    brand: '',
    model: '',
    vin: '',
    engineCapacity: 0,
    horsePower: 0,
    mileage: 0,
    productionYear: 0,
  };
  isAddingAuction: boolean = true;
  layout: string = 'list';
  sortOrder: number = 0;
  sortValue: string = '';
  sortOptions: SelectItem[] = [];
  filterOptions: SelectItem[] = [];
  sortField: string = '';

  constructor(
    private _auction: AuctionService,
    private _translate: TranslateService
  ) {}

  ngOnInit(): void {
    this._auction.fetch().subscribe({
      next: (res) => {
        this.auctions = res;
      },
      error: (err) => {
        console.error(err);
      },
    });
    this.sortOptions = [
      { label: 'Marka od A do Z', value: '!brand' },
      { label: 'Marka od Z do A', value: 'brand' },
    ];
    this.filterOptions = [
      { label: 'BMW', value: 'BMW' },
      { label: 'Mercedes', value: 'Mercedes' },
      { label: 'Toyota', value: 'Toyota' },
    ];
  }

  onDeleteAuction(auctionId: string): void {
    const index: number = this.auctions.findIndex(
      (auction) => auction._id === auctionId
    );

    if (index !== -1) {
      this.auctions.splice(index, 1);
    }
  }

  onEditAuction(auction?: Auction): void {
    if (auction) {
      this.isAddingAuction = false;
      this.editedAuction = auction;
    } else {
      this.isAddingAuction = true;
    }
    this.displayEditAuctionDialog = true;
  }

  editAuction(editedAuction: Auction): void {
    const index: number = this.auctions.findIndex(
      (auction) => auction._id === editedAuction._id
    );
    this.auctions[index] = editedAuction;
    this.auctions = [...this.auctions];
  }

  addAuction(addedAuction: Auction): void {
    this.auctions.push(addedAuction);
    this.auctions = [...this.auctions];
  }

  onSortChange(event: any) {
    let category = event.value;

    if (category !== null && category.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = category.substring(1, category.length);
    } else {
      this.sortOrder = 1;
      this.sortField = category;
    }
  }
}
