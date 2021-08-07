


// car detail
interface IArray {
    id: number
    image: string;
    favs: boolean
  }
  
  interface Data {
    text: string;
    icon: string;
  }
  
  interface IInfo {
    name: string;
    value: string;
  }
  
  interface IFeature {
    title: string;
    icon: string;
  }
  
  export interface IProp {
    Title: string;
    location: string;
    rating: string;
    price: string;
    numButton: string;
    mainButton: string;
    array: Data[];
    mailIcon: string;
    locIcon: string;
    numbIcon: string;
    ratIcon: string;
    desc: string;
    paragraph: string;
  }
  
  export interface Detail {
    desc: string;
    paragraph: string;
    arr: IArray[];
    info: IInfo[]
    feature: IFeature[]
    carTitle: string
  }
  
  
  export interface ICar {
    info: IInfo[]
    feature: IFeature[]
    carTitle: string
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
    items: Item;
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