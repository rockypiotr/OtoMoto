import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuctionListComponent } from './page/auction-list/auction-list.component';
import { AuctionPreviewComponent } from './page/auction-preview/auction-preview.component';

export const routes: Routes = [
  {
    path: 'list',
    component: AuctionListComponent,
  },
  {
    path: ':id',
    component: AuctionPreviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuctionRouting {}
