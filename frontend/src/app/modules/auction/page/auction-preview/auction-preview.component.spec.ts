import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionPreviewComponent } from './auction-preview.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { AuctionMainComponent } from './auction-main/auction-main.component';
import { AuctionEngineInfoComponent } from './auction-engine-info/auction-engine-info.component';
import { AuctionHistoryComponent } from './auction-history/auction-history.component';
import { CardModule } from 'primeng/card';
import { AuctionMainImageComponent } from './auction-main/auction-main-image/auction-main-image.component';
import { AuctionMainDetailsComponent } from './auction-main/auction-main-details/auction-main-details.component';

describe('AuctionPreviewComponent', () => {
  let component: AuctionPreviewComponent;
  let fixture: ComponentFixture<AuctionPreviewComponent>;

  beforeEach(async () => {
    // const fakeActivatedRoute = {
    //   snapshot: { params: { id: 'acution-id' } },
    // } as ActivatedRoute;

    await TestBed.configureTestingModule({
      imports: [
        CardModule,
        RouterTestingModule,
        RouterModule,
        HttpClientModule,
      ],
      declarations: [
        AuctionPreviewComponent,
        AuctionMainComponent,
        AuctionEngineInfoComponent,
        AuctionHistoryComponent,
        AuctionMainImageComponent,
        AuctionMainDetailsComponent,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: { id: 'auction-id' } } },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AuctionPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
