import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionMainComponent } from './auction-main.component';

describe('AuctionMainComponent', () => {
  let component: AuctionMainComponent;
  let fixture: ComponentFixture<AuctionMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuctionMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
