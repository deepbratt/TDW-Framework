import { Dispatch,SetStateAction } from "react";

interface IArray {
  title: string;
  path: string;
  icon: any;
}

interface Currencies {
  value: string;
  label: string;
}

interface Gender {
  value: string;
  label: string;
}

interface Country {
  value: string;
  label: string;
}

interface City {
  value: string;
  label: string;
}

export interface IProp {
  Title?: string;
  profileTitle: string;
  profile: string;
  sidebar: IArray[];
  currencies: Currencies[];
  country: Country[];
  city: City[];
  gender: Gender[];
  buttonText?: string;
  
}


export interface IContainer {
  Title: string;
  profileTitle: string;
  profile: string;
  sidebar: IArray[];
  currencies: Currencies[];
  country: Country[];
  city: City[];
  gender: Gender[];
  buttonText?: string;
}

export interface IProps {
  Title?: string;
  sidebar: IArray[];
}



export interface Upload {
  profile: any
  setImg: Dispatch<SetStateAction<string>>;
}



export interface IFav {
  title: string;
  message: string;
  profileTitle: string;
}

