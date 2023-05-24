import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auction-history',
  templateUrl: './auction-history.component.html',
  styleUrls: ['./auction-history.component.scss'],
})
export class AuctionHistoryComponent {
  @Input() auctionId!: string;
}
