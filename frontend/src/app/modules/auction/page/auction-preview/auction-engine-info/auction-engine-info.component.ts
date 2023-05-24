import { Component, Input } from '@angular/core';
import { Auction } from '../../../../../data/schema/auction';

@Component({
  selector: 'app-auction-engine-info',
  templateUrl: './auction-engine-info.component.html',
  styleUrls: ['./auction-engine-info.component.scss'],
})
export class AuctionEngineInfoComponent {
  @Input() auction!: Auction;
}
