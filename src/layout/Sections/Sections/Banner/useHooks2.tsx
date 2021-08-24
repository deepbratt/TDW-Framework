import { useState } from "react";

export interface Data {
    model: string;
    cities: string;
    min: string;
    max: string;
  }

export const useHooks = () => {
    const [val, setVal] = useState<Data>({
        model: "",
        cities: "",
        min: "",
        max: ""
    });


    return{
       setVal,
       val
    }
}