import SedanIcon from '../../../../assets/Cars/sedan.png';

export const CarFiltersData = {
  KEYWORDS: 'KEYWORDS',
  CATEGORIES: 'CATEGORIES',
  PRICE_RANGE: 'PRICE RANGE',
  YEAR: 'YEAR',
  PROVINCE: 'PROVINCE',
  CITY: 'CITY',
  REGISTRATION_CITY: 'REGISTRATION CITY',
  MAKE: 'MAKE',
  MODEL: 'MODEL',
  MILEAGE: 'MILEAGE (KM)',
  TRANSMISSION: 'TRANSMISSION',
  ENGINE_TYPE: 'ENGINE TYPE',
  ENGINE_CAPACITY: 'ENGINE CAPACITY (CC)',
  COLOR: 'COLOR',
  BODY_TYPE: 'BODY TYPE',
  ASSEMBLY: 'ASSEMBLY',
  PICTURE_AVAILABILITY: 'PICTURE AVAILABILITY',
  VIDEO_AVAILABILITY: 'VIDEO AVAILABILITY',
  SELLER_TYPE: 'SELLER TYPE',
  AD_TYPE: 'AD TYPE'
};

export const Carfilters = {
  TRANSMISSION: ['Automatic', 'Manual'],
  ENGINE_TYPE: ['Diesel', 'Petrol', 'Hybrid', 'Electric', 'CNG'],
  MAKE: ['Honda', 'Toyota', 'Suzuki', 'Nissan', 'Daihatsu'],
  MODEL: [
    'City',
    'Civic',
    'Vezel',
    'N Wgn',
    'Corolla',
    'Yaris',
    'Aqua',
    'Fortuner',
    'Prius',
    'Mehran',
    'Alto',
    'Cultus',
    'Wagon R',
    'Swift',
    'Dayz',
    'Dayz Highway Star',
    'Clipper',
    'Sunny',
    'Juke',
    'Mira',
    'Coure',
    'Hijet',
    'Move',
    'Charade'
  ],

  COLOR: [
    { hex: '#000000', text: 'Black' },
    { hex: '#FFFFFF', text: 'White' },
    { hex: '#CC0000', text: 'Red' },
    { hex: '#4E9B47', text: 'Green' },
    { hex: '#0000FF', text: 'Blue' },
    { hex: '#808080', text: 'Grey' },
    { hex: '#2A3439', text: 'Gun Metallic' }
  ],
  BODY_TYPE: [
    { icon: SedanIcon, filterName: 'bodyType', text: 'Compact sedan' },
    { icon: SedanIcon, filterName: 'bodyType', text: 'Compact SUV' },
    { icon: SedanIcon, filterName: 'bodyType', text: 'Mini Van' },
    { icon: SedanIcon, filterName: 'bodyType', text: 'Coupe' },
    { icon: SedanIcon, filterName: 'bodyType', text: 'Convertible' },
    { icon: SedanIcon, filterName: 'bodyType', text: 'Crossover' },
    { icon: SedanIcon, filterName: 'bodyType', text: 'Double Cabin' },
    { icon: SedanIcon, filterName: 'bodyType', text: 'High Roof' },
    { icon: SedanIcon, filterName: 'bodyType', text: 'Micro Van' },
    { icon: SedanIcon, filterName: 'bodyType', text: 'Mini Vehicles' },
    { icon: SedanIcon, filterName: 'bodyType', text: 'MPV' },
    { icon: SedanIcon, filterName: 'bodyType', text: 'Off-Road Vehicles' },
    { icon: SedanIcon, filterName: 'bodyType', text: 'Pick Up' },
    { icon: SedanIcon, filterName: 'bodyType', text: 'Sedan' },
    { icon: SedanIcon, filterName: 'bodyType', text: 'Single Cabin' },
    { icon: SedanIcon, filterName: 'bodyType', text: 'Station Wagon' },
    { icon: SedanIcon, filterName: 'bodyType', text: 'Subcompact hatchback' },
    { icon: SedanIcon, filterName: 'bodyType', text: 'SUV' },
    { icon: SedanIcon, filterName: 'bodyType', text: 'Truck' },
    { icon: SedanIcon, filterName: 'bodyType', text: 'Van' }
  ],
  ASSEMBLY: ['Local', 'Imported'],
  PICTURE_AVAILABILITY: ['With Picture'],
  VIDEO_AVAILABILITY: ['With Video'],
  SELLER_TYPE: ['Individual', 'Dealer'],
  AD_TYPE: ['Featured Ads']
};

export const sortingOptions = [
  { value: 'price', label: 'Price: Low to High' },
  { value: '-price', label: 'Price: High to Low' },
  { value: '-createdAt', label: 'Ad Date: Recent First' },
  { value: 'createdAt', label: 'Ad Date: Oldest First' }
];

export const conditionOptions = [
  { value: 'excellent', label: 'Excellent' },
  { value: 'good', label: 'Good' },
  { value: 'bad', label: 'Bad' }
];
