import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionPreviewComponent } from './auction-preview.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuctionPreviewComponent', () => {
  let component: AuctionPreviewComponent;
  let fixture: ComponentFixture<AuctionPreviewComponent>;

  beforeEach(async () => {
    // const fakeActivatedRoute = {
    //   snapshot: { params: { id: 'acution-id' } },
    // } as ActivatedRoute;

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, RouterModule],
      declarations: [AuctionPreviewComponent],
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
