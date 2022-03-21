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
  image: any;
  selectedImage: any;
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
  bodyType: string;
  bodyColor: string;
  registrationCity: string;
  assembly: string;
  description: string;
  regNumber: string;
  createdBy: any | IUser;
  updatedAt: string;
  slug: string;
  isFav: boolean;
  isPublished: boolean;
  adType: "Rental" | "Sell";
}

export interface IUser {
  active: boolean;
  banned: boolean;
  email: string;
  createdBy: string;
  firstName: string;
  lastName: string;
  phobne: string;
  role: string;
  signedUpWithPhone: boolean;
  signedUpWithEmail: boolean;
  updatedAt: string;
  username: string;
  _id: string;
}
