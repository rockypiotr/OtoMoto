import { Component, Input } from '@angular/core';
import { Auction } from '../../../../../../data/schema/auction';

@Component({
  selector: 'app-auction-main-details',
  templateUrl: './auction-main-details.component.html',
  styleUrls: ['./auction-main-details.component.scss'],
})
export class AuctionMainDetailsComponent {
  @Input() auction!: Auction;
}
