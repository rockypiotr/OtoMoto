import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionMainImageComponent } from './auction-main-image.component';

describe('AuctionMainImageComponent', () => {
  let component: AuctionMainImageComponent;
  let fixture: ComponentFixture<AuctionMainImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuctionMainImageComponent],
      imports: [],
    }).compileComponents();

    fixture = TestBed.createComponent(AuctionMainImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
