import { NgModule } from '@angular/core';
import { AuctionRouting } from './auction.routing';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { AuctionListComponent } from './page/auction-list/auction-list.component';
import { AuctionItemComponent } from './page/auction-list/auction-item/auction-item.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { AuctionEditComponent } from './page/auction-list/auction-edit/auction-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TranslateModule } from '@ngx-translate/core';
import { AuctionPreviewComponent } from './page/auction-preview/auction-preview.component';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { CardModule } from 'primeng/card';
import { AuctionMainComponent } from './page/auction-preview/auction-main/auction-main.component';
import { AuctionEngineInfoComponent } from './page/auction-preview/auction-engine-info/auction-engine-info.component';
import { AuctionHistoryComponent } from './page/auction-preview/auction-history/auction-history.component';
import { AuctionMainDetailsComponent } from './page/auction-preview/auction-main/auction-main-details/auction-main-details.component';
import { AuctionMainImageComponent } from './page/auction-preview/auction-main/auction-main-image/auction-main-image.component';
import { DataViewModule } from 'primeng/dataview';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  declarations: [
    AuctionListComponent,
    AuctionItemComponent,
    AuctionEditComponent,
    AuctionPreviewComponent,
    AuctionMainComponent,
    AuctionEngineInfoComponent,
    AuctionHistoryComponent,
    AuctionMainDetailsComponent,
    AuctionMainImageComponent,
  ],
  imports: [
    AuctionRouting,
    NgForOf,
    ButtonModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    TranslateModule,
    DropdownModule,
    NgIf,
    NgClass,
    FileUploadModule,
    CardModule,
    DataViewModule,
    MultiSelectModule,
  ],
})
export class AuctionModule {}
