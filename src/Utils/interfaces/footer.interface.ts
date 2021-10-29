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

export interface IFooterFilter {
  filterName: string;
  text: string;
  value: string;
}

export interface IData {
  logo: string;
  socialMedia: IRoutes[];
  appLinks: string[];
  sell: IRoutes[];
  // explore: IRoutes[];
  // carOkta: IRoutes[];
  mostSearched: IRoutes[];
  termsAndConditions: IRoutes[];
  copyrights: string;
  notice: string;
  filters: {
    City: IFooterFilter[];
    // Province: IFooterFilter[];
    Make: IFooterFilter[];
    // Color: IFooterFilter[];
    BodyType: IFooterFilter[];
    Models: IFooterFilter[];
  };
}

export interface FooterProps {
  data: IData;
  rootBackgroundColor: string;
  textPrimary: string;
}
