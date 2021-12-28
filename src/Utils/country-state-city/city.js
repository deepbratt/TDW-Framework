const getAllData = require("../API/API").getAllData;
// var __importDefault = (this && this.__importDefault) || function (mod) {
//     return (mod && mod.__esModule) ? mod : { "default": mod };
// };
Object.defineProperty(exports, "__esModule", { value: true });
// Get a list of all cities.
async function getAllCities() {
    var response = await getAllData(`ads/cars/cities`);
    var cities = response.data.result;
    return cities;
}
// Get a list of cities belonging to a specific state and country.
async function getCitiesOfState(countryCode, stateCode) {
    if (!stateCode)
        return [];
    if (!countryCode)
        return [];
    var response = await getAllData(`ads/cars/cities/state-code/${stateCode}/${countryCode}`);
    var cities = response.data.result;
    return cities;
}
// Get a list of cities belonging to a specific country.
async function getCitiesOfCountry(countryCode) {
    if (!countryCode)
        return [];
    console.log("getCitiesOfCountry()");
    var response = await getAllData(`ads/cars/cities/country-code/${countryCode}`);
    var cities = response.data.result;
    console.log(cities);
    return cities;
}
exports.default = {
    getAllCities: getAllCities,
    getCitiesOfState: getCitiesOfState,
    getCitiesOfCountry: getCitiesOfCountry,
};
