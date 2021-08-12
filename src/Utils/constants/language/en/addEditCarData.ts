import onlyYears from "../../../helperFunctions";

const addEditCarData = {
  // headings:{},
  fields: {
    selectCity: {
      label: "Select City",
      defaultValue: "City",
    },
    carInformation: {
      label: "Car Information",
      defaultValue: "Car Information",
      menu: ["Lorem", "Ipsum", "Hello", "World"],
    },
    carModel: {
      label: "Car Model",
      defaultValue: "Car Model",
      menu: ["Civic", "City", "Corolla", "Mehran"],
    },
    carMake: {
      label: "Car Make",
      defaultValue: "Car Make",
      menu: ["Honda", "Toyota", "Suzuki", "Ford"],
    },
    modelYear: {
      label: "Model Year",
      defaultValue: "Model Year",
      menu: onlyYears,
    },
    bodyColor: {
      label: "Body Color",
      defaultValue: "Body Color",
      menu: ["black", "blue", "green", "white"],
    },
    bodyType: {
      label: "Body Type",
      defaultValue: "Body Type",
      menu: ["Sedan", "SUV", "Mini Van", "Hatchback"],
    },
    bodyCondition: {
      label: "Body Condition",
      defaultValue: "Body Condition",
      menu: ["poor", "good", "excellent", "New"],
    },
    registeredIn: {
      label: "Registered In",
      defaultValue: "Registered In",
    },
    mileage: {
      label: "Mileage (km)",
      defaultValue: "Mileage (km)",
    },
    price: {
      label: "Price (Rs.)",
      defaultValue: "Price (Rs.)",
    },
    description: {
      label: "Description",
      defaultValue: "Add Description",
    },
    engineType: {
      label: "Engine Type",
      defaultValue: "Engine Type",
      menu: ["Petrol", "Diesel", "CNG", "LPG", "Hybrid", "Electric"],
    },
    engineCapacity: {
      label: "Engine Capacity (cc)",
      defaultValue: "Engine Capacity (cc)",
    },
    transmission: {
      label: "Transmission",
      defaultValue: "Transmission",
      menu: ["Automatic", "Manual"],
    },
    assembly: {
      label: "Assembly",
      defaultValue: "Assembly",
      menu: ["Local", "Imported"],
    },
  },
  steps: [
    "Enter Your Car Information",
    "Upload Photos",
    "Additional Information",
  ],
  buttons: {
    next: "Next",
    post: "Post",
    back: "Back",
    addPhoto: "Add Photos +",
  },
  infoText: "(Max limit 5 MB per image)",
  requiredFieldText: "This field is required",
  requiredImageText: "Minimum 1 car picture is required",
  features: [
    "ABS",
    "AM/FM Radio",
    "CD Player",
    "Air Conditioning",
    "Alloy Rims",
    "DVD Player",
    "Front Speakers",
    "Cruise Control",
    "Navigation System",
    "CoolBox",
    "Keyless Entry",
    "Power Steering",
    "Immobilizer Key",
    "Power Mirrors",
    "Power Locks",
    "Air Bags",
  ],
};

export default addEditCarData;
