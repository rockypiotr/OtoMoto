import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auction-main-image',
  templateUrl: './auction-main-image.component.html',
  styleUrls: ['./auction-main-image.component.scss'],
})
export class AuctionMainImageComponent {
  @Input() image?: string;
}
