import CarImage from "../../../../assets/Cars/listingCard.jpg";
import { ICarCard } from "../../../interfaces/products.interface";

export const LISTING_PAGE_HEADER = "Featured Used Cars For Sale";

export interface ICarData {
  product: ICarCard;
  productImage: string;
}

export const CarsListingData: ICarData[] = [
  {
    product: {
      _id: "0f988897654de0",
      date: "20 JUNE 2019",
      year: "2017",
      driven: 45000,
      engineCapacity: 1200,
      transmission: "Automatic",
      price: 8900000,
      city: "Islamabad",
      isFeatured: true,
      fuel: "Petrol",
      name: "BMW 3 Series 2016",
    },
    productImage: CarImage,
  },
  {
    product: {
      _id: "0f988897654de1",
      date: "20 JUNE 2019",
      year: "2017",
      driven: 45000,
      engineCapacity: 1200,
      transmission: "Automatic",
      price: 8900000,
      city: "Islamabad",
      isFeatured: true,
      fuel: "Petrol",
      name: "BMW 3 Series 2016",
    },
    productImage: CarImage,
  },
  {
    product: {
      _id: "0f988897654de2",
      date: "20 JUNE 2019",
      year: "2017",
      driven: 45000,
      engineCapacity: 1200,
      transmission: "Automatic",
      price: 8900000,
      city: "Islamabad",
      isFeatured: true,
      fuel: "Petrol",
      name: "BMW 3 Series 2016",
    },
    productImage: CarImage,
  },
  {
    product: {
      _id: "0f988897654de3",
      date: "20 JUNE 2019",
      year: "2017",
      driven: 45000,
      engineCapacity: 1200,
      transmission: "Automatic",
      price: 8900000,
      city: "Islamabad",
      isFeatured: true,
      fuel: "Petrol",
      name: "BMW 3 Series 2016",
    },
    productImage: CarImage,
  },
];
