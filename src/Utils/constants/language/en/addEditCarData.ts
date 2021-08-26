import onlyYears from '../../../helperFunctions';

const addEditCarData = {
  // headings:{},
  fields: {
    selectCity: {
      label: 'Select City',
      defaultValue: 'City'
    },
    carInformation: {
      label: 'Car Information',
      defaultValue: 'Car Information',
      menu: ['Lorem', 'Ipsum', 'Hello', 'World']
    },
    carModel: {
      label: 'Car Model',
      defaultValue: 'Car Model',
      menu: {
        Honda: ['City', 'Civic', 'Vezel', 'N Wgn'],
        Toyota: ['Corolla', 'Yaris', 'Aqua', 'Fortuner', 'Prius'],
        Suzuki: ['Mehran', 'Alto', 'Cultus', 'Wagon R', 'Swift'],
        Nissan: ['Dayz', 'Dayz Highway Star', 'Clipper', 'Sunny', 'Juke'],
        Daihatsu: ['Mira', 'Coure', 'Hijet', 'Move', 'Charade'],
        '': ['']
      }
    },
    carMake: {
      label: 'Car Make',
      defaultValue: 'Car Make',
      menu: ['Honda', 'Toyota', 'Suzuki', 'Nissan', 'Daihatsu']
    },
    modelYear: {
      label: 'Model Year',
      defaultValue: 'Model Year',
      menu: onlyYears
    },
    bodyColor: {
      label: 'Body Color',
      defaultValue: 'Body Color',
      menu: ['Black', 'Blue', 'Green', 'White', 'Red', 'Grey', 'Gun Metallic']
    },
    bodyType: {
      label: 'Body Type',
      defaultValue: 'Body Type',
      menu: [
        'Compact sedan',
        'Compact SUV',
        'Mini Van',
        'Coupe',
        'Convertible',
        'Crossover',
        'Double Cabin',
        'High Roof',
        'Micro Van',
        'Mini Vehicles',
        'MPV',
        'Off-Road Vehicles',
        'Pick Up',
        'Sedan',
        'Single Cabin',
        'Station Wagon',
        'Subcompact hatchback',
        'SUV',
        'Truck',
        'Van'
      ]
    },
    bodyCondition: {
      label: 'Body Condition',
      defaultValue: 'Body Condition',
      menu: ['Good', 'Excellent', 'Bad']
    },
    registeredIn: {
      label: 'Registered In',
      defaultValue: 'Registered In'
    },
    mileage: {
      label: 'Mileage (km)',
      defaultValue: 'Mileage (km)'
    },
    price: {
      label: 'Price (Rs.)',
      defaultValue: 'Price (Rs.)'
    },
    registrationNo: {
      label: 'Registration No.',
      defaultValue: 'Registration No.'
    },
    description: {
      label: 'Description',
      defaultValue: 'Add Description'
    },
    engineType: {
      label: 'Engine Type',
      defaultValue: 'Engine Type',
      menu: ['Petrol', 'Diesel', 'CNG', 'LPG', 'Hybrid', 'Electric']
    },
    engineCapacity: {
      label: 'Engine Capacity (cc)',
      defaultValue: 'Engine Capacity (cc)'
    },
    transmission: {
      label: 'Transmission',
      defaultValue: 'Transmission',
      menu: ['Automatic', 'Manual']
    },
    assembly: {
      label: 'Assembly',
      defaultValue: 'Assembly',
      menu: ['Local', 'Imported']
    },
    sellerType: {
      label: 'Seller Type',
      defaultValue: 'Seller Type',
      menu: ['Individual', 'Dealer']
    }
  },
  steps: [
    'Enter Your Car Information',
    'Upload Photos',
    'Additional Information'
  ],
  buttons: {
    next: 'Next',
    post: 'Post',
    back: 'Back',
    delete: 'Delete',
    confirmDelete: 'Yes',
    cancelDelete: 'Cancel',
    addPhoto: 'Add Photos +'
  },
  infoText: '(Max limit 5 MB per image)',
  requiredFieldText: 'This field is required',
  requiredImageText: 'Minimum 1 car picture is required',
  deleteDialogTitle: 'Delete!',
  deleteDialogMessage: 'Are you sure you want to delete this Car Ad?',
  features: [
    'ABS',
    'AM/FM Radio',
    'CD Player',
    'Air Conditioning',
    'Alloy Rims',
    'DVD Player',
    'Front Speakers',
    'Cruise Control',
    'Navigation System',
    'CoolBox',
    'Keyless Entry',
    'Power Steering',
    'Immobilizer Key',
    'Power Mirrors',
    'Power Locks',
    'Air Bags'
  ]
};

export default addEditCarData;
