import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Auction } from '../../../../../data/schema/auction';
import { AuctionService } from '../../../../../core/service/auction.service';
import { Router } from '@angular/router';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-auction-item',
  templateUrl: './auction-item.component.html',
  styleUrls: ['./auction-item.component.scss'],
})
export class AuctionItemComponent {
  @Input() data!: Auction;
  @Input() display!: 'list' | 'grid';
  @Output() onEditAuction = new EventEmitter<Auction>();
  @Output() onDeleteAuction = new EventEmitter<string>();

  constructor(private _auction: AuctionService, private _router: Router) {}

  deleteAuction(id: string): void {
    this._auction.deleteById(id).subscribe((auction) => {
      this.onDeleteAuction.emit(auction._id);
    });
  }

  editAuction(auction: Auction): void {
    this.onEditAuction.emit(auction);
  }

  previewAuction(id: string): void {
    this._router.navigate(['auction/' + id]);
  }

  printAuction(auction: Auction): void {
    const document = new jsPDF();

    document.text(`${auction.brand} - ${auction.model} Details`, 10, 10);
    document.text(`Auction number: ${auction._id}`, 10, 20);
    document.text(`VIN: ${auction.vin}`, 10, 30);
    document.text(`Production year: ${auction.productionYear}`, 10, 40);
    document.text(`HP: ${auction.horsePower} KM`, 10, 50);
    document.text(`Mileage: ${auction.mileage} KM`, 10, 60);
    document.text(`Engine capacity: ${auction.engineCapacity} cm3`, 10, 70);
    document.text(`Auction created: ${auction.createdAt}`, 10, 80);

    document.save(
      `${this.data.brand} - ${
        this.data.model
      } - ${new Date().toDateString()}.pdf`
    );
  }
}
