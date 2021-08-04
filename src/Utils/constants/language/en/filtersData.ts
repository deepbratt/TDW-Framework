import SedanIcon from "../../../../assets/Cars/sedan.png";

export const CarFiltersData = {
  CATEGORIES: "CATEGORIES",
  PRICE_RANGE: "PRICE RANGE",
  YEAR: "YEAR",
  MAKE: "MAKE",
  PROVINCE: "PROVINCE",
  CITY: "CITY",
  REGISTRATION_CITY: "REGISTRATION CITY",
  MILEAGE: "MILEAGE (KM)",
  TRANSMISSION: "TRANSMISSION",
  ENGINE_TYPE: "ENGINE TYPE",
  ENGINE_CAPACITY: "ENGINE CAPACITY (CC)",
  COLOR: "COLOR",
  BODY_TYPE: "BODY TYPE",
  MODEL_CATEGORY: "MODEL CATEGORY",
  PICTURE_AVAILABILITY: "PICTURE AVAILABILITY",
  VIDEO_AVAILABILITY: "VIDEO AVAILABILITY",
  SELLER_TYPE: "SELLER TYPE",
};

export const Carfilters = {
  TRANSMISSION: ["Automatic", "Manual"],
  ENGINE_TYPE: ["Diesel", "Petrol", "Hybrid", "Electric"],
  BODY_TYPE: [
    { icon: SedanIcon, name: "Sedan" },
    { icon: SedanIcon, name: "SUV" },
    { icon: SedanIcon, name: "4WD" },
    { icon: SedanIcon, name: "Mini Van" },
    { icon: SedanIcon, name: "Off Road" },
    { icon: SedanIcon, name: "Pick Up" },
    { icon: SedanIcon, name: "Hatchback" },
  ],
  PICTURE_AVAILABILITY: ["With Picture"],
  VIDEO_AVAILABILITY: ["With Video"],
  SELLER_TYPE: ["Individuals", "Dealers"],
};
