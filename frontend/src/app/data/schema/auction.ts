export interface Auction {
  _id: string;
  brand: string;
  model: string;
  vin: string;
  productionYear: number;
  horsePower: number;
  mileage: number;
  engineCapacity: number;
  img?: File;
  imgUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
