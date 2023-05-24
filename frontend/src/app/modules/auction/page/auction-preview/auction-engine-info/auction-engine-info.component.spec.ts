import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionEngineInfoComponent } from './auction-engine-info.component';

describe('AuctionEngineInfoComponent', () => {
  let component: AuctionEngineInfoComponent;
  let fixture: ComponentFixture<AuctionEngineInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionEngineInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuctionEngineInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
