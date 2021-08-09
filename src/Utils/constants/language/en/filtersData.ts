import SedanIcon from "../../../../assets/Cars/sedan.png";

export const CarFiltersData = {
  KEYWORDS: "KEYWORDS",
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
  AD_TYPE: "AD TYPE",
};

export const Carfilters = {
  TRANSMISSION: ["Automatic", "Manual"],
  ENGINE_TYPE: ["Diesel", "Petrol", "Hybrid", "Electric"],
  COLOR: [
    { hex: "#000000", name: "Black" },
    { hex: "#FFFFFF", name: "White" },
    { hex: "#CC0000", name: "Red" },
    { hex: "#4E9B47", name: "Green" },
    { hex: "#0000FF", name: "Blue" },
    { hex: "#6F4E37", name: "Brown" },
    { hex: "#D3D3D3	", name: "Silver" },
    { hex: "#DAA520", name: "Golden" },
    // { hex: "rgba(0, 0, 0, 0)", name: "Other Colors" },
  ],
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
  AD_TYPE: ["Featured Ads"],
};

export const sortingOptions = [
  { value: "most_popular", label: "most popular" },
  { value: "recent", label: "recent" },
  { value: "oldest", label: "oldest" },
  { value: "used", label: "Used" },
  { value: "new", label: "New" },
];

export const deliveryOptions = [
  { value: "most_popular", label: "most popular" },
  { value: "recent", label: "recent" },
  { value: "oldest", label: "oldest" },
  { value: "used", label: "Used" },
  { value: "new", label: "New" },
];
