import { Component, Input } from '@angular/core';
import { Auction } from '../../../../../data/schema/auction';

@Component({
  selector: 'app-auction-main',
  templateUrl: './auction-main.component.html',
  styleUrls: ['./auction-main.component.scss'],
})
export class AuctionMainComponent {
  @Input() auction!: Auction;
}
