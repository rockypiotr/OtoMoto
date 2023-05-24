import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuctionService } from '../../../../../core/service/auction.service';
import { Auction } from '../../../../../data/schema/auction';
import { vinValidator } from '../../../../../shared/validators/vin.validator';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-auction-edit',
  templateUrl: './auction-edit.component.html',
  styleUrls: ['./auction-edit.component.scss'],
})
export class AuctionEditComponent implements OnInit, OnChanges {
  @Input() visible!: boolean;
  @Input() auction?: Auction;
  @Input() isAddingAuction!: boolean;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() onAddAuction = new EventEmitter<Auction>();
  @Output() onEditAuction = new EventEmitter<Auction>();

  auctionForm!: FormGroup;
  brands: SelectItem[] = [
    { label: 'Toyota', value: 'TOYOTA' },
    { label: 'BMW', value: 'BMW' },
    { label: 'Mercedes-Benz', value: 'MERCEDES' },
  ];
  model: SelectItem[] = [
    { label: 'Seria 3', value: 'rav' },
    { label: 'Seria 5', value: 'rav2' },
  ];
  file: File | null = null;

  constructor(private _auction: AuctionService) {}

  ngOnInit() {
    this.auctionForm = new FormGroup({
      brand: new FormControl(null, Validators.required),
      model: new FormControl('', Validators.required),
      vin: new FormControl('', [Validators.required, vinValidator()]),
      productionYear: new FormControl('', Validators.required),
      horsePower: new FormControl('', Validators.required),
      mileage: new FormControl('', Validators.required),
      engineCapacity: new FormControl('', Validators.required),
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isAddingAuction']) {
      const newIsAddingAuction = changes['isAddingAuction'].currentValue;
      this.isAddingAuction = newIsAddingAuction;

      if (this.isAddingAuction && this.auctionForm) {
        this.auctionForm.reset();
      } else if (this.auction && this.auctionForm && !changes['auction']) {
        this.auctionForm.patchValue(this.auction);
      }
    }
    if (changes['auction'] && this.auctionForm) {
      const newAuction = changes['auction'].currentValue;
      this.auction = newAuction;

      if (this.auction !== undefined && !this.isAddingAuction) {
        this.auctionForm.patchValue(this.auction);
      }
    }
  }

  onSubmit(form: FormGroup): void {
    this.isAddingAuction ? this.addAuction(form) : this.editAuction(form);
  }

  addAuction(form: FormGroup) {
    this._auction.create(form).subscribe((auction) => {
      this.onAddAuction.emit(auction);
      this.visibleChange.emit(false);
      this.auctionForm.reset();
    });
  }

  editAuction(form: FormGroup) {
    if (this.auction) {
      this._auction.editById(this.auction._id, form).subscribe((auction) => {
        this.onEditAuction.emit(auction);
        this.visibleChange.emit(false);
      });
    }
  }

  editImageToAuction(event: any) {
    console.log(event.target.files[0]);
  }
}
