export interface IHeaders {
  MostSearched: string;
  leadingCategories: string;
}

export interface IContact {
  location: string;
  phone: string;
}

export interface IRoutes {
  path: string;
  name: string;
  icon?: string;
}

export interface ICategories {
  popularMakeAndModels: IRoutes[];
  bikesAndMotorcycles: IRoutes[];
  cars: IRoutes[];
}

export interface IData {
  logo: string;
  headers: IHeaders;
  socialMedia: IRoutes[];
  contacts: IContact[];
  services: IRoutes[];
  about: IRoutes[];
  help: IRoutes[];
  categories: ICategories;
  mostSearched: IRoutes[];
  termsAndConditions: IRoutes[];
}

export interface FooterProps {
  data: IData;
  rootBackgroundColor: string;
  textPrimary: string;
}
