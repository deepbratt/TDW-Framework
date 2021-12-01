export interface ICarCard {
  _id: string;
  id: string;
  model: string;
  modelYear: number;
  createdAt: string;
  milage: number;
  engineType: number;
  engineCapacity: number;
  transmission: string;
  city: string;
  price: number;
  image: string[];
  features: string[];
  location: any;
  favOf: string[];
  isSold: boolean;
  active: boolean;
  banned: boolean;
  country: string;
  province: string;
  make: string;
  condition: string;
  bodyTye: string;
  bodyColor: string;
  registrationCity: string;
  assembly: string;
  description: string;
  regNumber: string;
  createdBy: string;
  updatedAt: string;
  slug:string
} 