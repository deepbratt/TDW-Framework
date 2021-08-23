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
    { hex: "#000000", text: "Black" },
    { hex: "#FFFFFF", text: "White" },
    { hex: "#CC0000", text: "Red" },
    { hex: "#4E9B47", text: "Green" },
    { hex: "#0000FF", text: "Blue" },
    { hex: "#6F4E37", text: "Brown" },
    { hex: "#D3D3D3	", text: "Silver" },
    { hex: "#DAA520", text: "Golden" },
    // { hex: "rgba(0, 0, 0, 0)", text: "Other Colors" },
  ],
  BODY_TYPE: [
    { icon: SedanIcon, text: "Sedan" },
    { icon: SedanIcon, text: "SUV" },
    { icon: SedanIcon, text: "4WD" },
    { icon: SedanIcon, text: "Mini Van" },
    { icon: SedanIcon, text: "Off Road" },
    { icon: SedanIcon, text: "Pick Up" },
    { icon: SedanIcon, text: "Hatchback" },
  ],
  PICTURE_AVAILABILITY: ["With Picture"],
  VIDEO_AVAILABILITY: ["With Video"],
  SELLER_TYPE: ["Individuals", "Dealers"],
  AD_TYPE: ["Featured Ads"],
};

export const sortingOptions = [
  { value: "-price", label: "Price: Low to High" },
  { value: "price", label: "Price: High to Low" },
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
