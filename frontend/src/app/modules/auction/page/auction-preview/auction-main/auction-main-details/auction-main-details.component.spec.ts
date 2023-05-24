import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionMainDetailsComponent } from './auction-main-details.component';

describe('AuctionMainDetailsComponent', () => {
  let component: AuctionMainDetailsComponent;
  let fixture: ComponentFixture<AuctionMainDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionMainDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuctionMainDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
