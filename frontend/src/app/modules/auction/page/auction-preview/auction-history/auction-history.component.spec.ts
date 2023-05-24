import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionHistoryComponent } from './auction-history.component';

describe('AuctionHistoryComponent', () => {
  let component: AuctionHistoryComponent;
  let fixture: ComponentFixture<AuctionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuctionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
