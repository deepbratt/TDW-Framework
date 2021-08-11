import { Dispatch, SetStateAction } from "react";


// car detail
interface IArray {
    id: number
    image: string;
    favs: boolean
  }
  
  interface Data {
    yearIcon: string;
    typeIcon: string;
    mileageIcon: string;
    petrolIcon: string;
  }
  
  interface IInfo {
    cityName?: string;
    assemblyName?: string;
    bodyName?: string;
    adName?: string;
    colorName?: string;
    engineName?: string;
    dateName?: string;
  }
  
  interface IFeature {
    title: string;
    icon: string;
  }

  export interface ICarCard {
    model?: string;
    date: string;
    year?: string;
    engineType?: string;
    engineCapacity?: number;
    transmission?: string;
    price?: number;
    city?: string;
    // isFeatured: boolean;
    name?: string;
    image?: string[];
    images?: string[];
    milage?: number;
    bodyType?: string;
    bodyColor?: string;
    brand?: string;
    condition?: string;
    description: string;
    country?: string;
    favOf?: string[];
    features?: string[];
    id: string;
    make?: string;
    location?: any;
    province?: string;
    registeredCity?: string;
    _id?: string;
    isFav?: boolean;
    assembly?: string
  }
  
  
  export interface Detail {
    desc: string;
    paragraph: string | undefined;
    arr: IArray[];
    info: IInfo;
    feature: IFeature[]
    carTitle: string;
    id?: string;
    city?: string;
    assembly?: string
    bodyType?: string;
    adRef?: string;
    color?: string;
    engineCapacity?: number;
    date: string;
    isFavs?: boolean;
  }
  
  
  export interface IProp {
    Title: string;
    location?: string;
    rating?: string;
    numButton?: string;
    mainButton?: string;
    array?: Data;
    mailIcon?: string;
    locIcon?: string;
    numbIcon?: string;
    ratIcon?: string;
    paragraph?: string;
    desc?: string;
    price?: number;
    year?: string;
    transmission?: string;
    mileage?: number;
    engineType?: string;
    assembly?: string
  }


  // car information
  
  export interface ICar {
    info: IInfo
    feature: IFeature[]
    carTitle: string;
    city?: string;
    assembly?: string;
    bodyType?: string;
    adRef?: string;
    color?: string;
    engineCapacity?: number;
    date: string;
  }
  

// carcomparision
  interface Item {
    [key: string]: {
      name: string;
      type: string;
      data: {
        name: string;
        value: string;
      }[];
    };
  }
  
  export interface IProps {
    subTitle: string
    Title?: string
    lessBtn?: string
    moreBtn?: string
    items: ICarCard[];
  }
  



  // post an ad 

  
interface CarArray {
  title: string;
  icon: string;
}

export interface CarProp {
  carTitle: string;
  carSubTitle: string;
  carArray: CarArray[]
}




// Used cars 

export interface IData {
  model: string;
  city: string;
  min: number;
  max: number;
  area: string;
  version: string;
  yearFrom: number;
  yearTo: string;
  engine: string;
  engineCapacityFrom: number;
  engineCapacityTo: number;
  mileageFrom: string;
  mileageTo: string;
}

export interface MoreOptions {
  allBody: string;
  allColors: string;
  registered: string;
  assemblyTypes: string;
  transmissionTypes: string;
  adWithPics: string;
  sellerType: string;
  adTypes: string;
}

export interface IToggle {
  setIsChecked?: Dispatch<SetStateAction<boolean>>;
  isChecked?: boolean;
  data: IData;
  setData: (value: any) => void;
}

export interface Options {
  setIsChecked?: Dispatch<SetStateAction<boolean>>;
  moreOp: MoreOptions;
  data?: Data;
  setMoreOp: (value: any) => void;
}


export interface IExtend {
  payload: ICarCard[];
  handleAddFavs: (id:string) => void;
  colorChange: boolean
}


export interface IContainer {
  payload: ICarCard[];
}


