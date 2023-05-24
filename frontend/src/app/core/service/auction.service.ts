import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auction } from '../../data/schema/auction';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AuctionService {
  private readonly url = 'http://localhost:5000/api/auction/';

  constructor(private _http: HttpClient) {}

  fetch(): Observable<Auction[]> {
    return this._http.get<Auction[]>(this.url);
  }

  fetchById(id: string): Observable<Auction> {
    return this._http.get<Auction>(this.url + id);
  }

  create(form: FormGroup): Observable<Auction> {
    return this._http.post<Auction>(this.url, form.value);
  }

  deleteById(id: string): Observable<Auction> {
    return this._http.delete<Auction>(this.url + id);
  }

  editById(id: string, form: FormGroup): Observable<Auction> {
    return this._http.patch<Auction>(this.url + id, {
      brand: form.value.brand,
      model: form.value.model,
      vin: form.value.vin,
      productionYear: form.value.productionYear,
      horsePower: form.value.horsePower,
      mileage: form.value.mileage,
      engineCapacity: form.value.engineCapacity,
    });
  }
}
