import { useState } from "react";

export interface Data {
    model: string;
    cities: string;
    priceRange: string;
  }

export const useHooks = () => {
    const [val, setVal] = useState<Data>({
        model: "",
        cities: "",
        priceRange: "",
    });


    return{
       setVal,
       val
    }
}