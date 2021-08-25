export interface IOptions {
  icon: string;
  hoverIcon: string;
  value: number[] | string | string[];
  filterName: string;
  text: string;
}

export interface IBrowseUsedCars {
  Category?: IOptions[];
  Budget: IOptions[];
  Make?: IOptions[];
  Model?: IOptions[];
  BodyType?: IOptions[];
  City?: IOptions[];
}

export interface TabsProps {
  data: IBrowseUsedCars;
}
