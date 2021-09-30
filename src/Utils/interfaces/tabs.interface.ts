export interface IOptions {
  icon: string;
  text: string;
}

export interface IBrowseUsedCars {
  Category: IOptions[];
  Budget: IOptions[];
  Make: IOptions[];
  Model: IOptions[];
  BodyType: IOptions[];
  City: IOptions[];
}

export interface TabsProps {
  data: IBrowseUsedCars;
}
