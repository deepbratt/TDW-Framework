const getAllData = require("../API/API").getAllData;
// var __importDefault = (this && this.__importDefault) || function (mod) {
//     return (mod && mod.__esModule) ? mod : { "default": mod };
// };
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStateByCode = exports.getStateByCodeAndCountry = exports.getStatesOfCountry = exports.getAllStates = void 0;
// Get a list of all states.
async function getAllStates() {
    var response = await getAllData(`ads/cars/states`);    
    var states = response.data.result;
    return states;
}
exports.getAllStates = getAllStates;
// Get a list of states belonging to a specific country.
async function getStatesOfCountry(countryCode) {
    if (!countryCode)
        return [];
    var response = await getAllData(`ads/cars/states/country-code/${countryCode}`);
    var states = response.data.result;
    return states;
}
exports.getStatesOfCountry = getStatesOfCountry;
// Find a country by it's ISO code and the country in which it is contained.
async function getStateByCodeAndCountry(stateCode, countryCode) {
    if (!stateCode)
        return undefined;
    if (!countryCode)
        return undefined;
    var response = await getAllData(`ads/cars/states/country-code/${stateCode}/${countryCode}`);
    var states = response.data.result;
    return states;
}
exports.getStateByCodeAndCountry = getStateByCodeAndCountry;
// to be deprecate
async function getStateByCode(isoCode) {
    if (!isoCode)
        return undefined;
    var response = await getAllData(`ads/cars//states/state-code/${isoCode}`);
    var states = response.data.result;
    return states;
}
exports.getStateByCode = getStateByCode;
exports.default = {
    getAllStates: getAllStates,
    getStatesOfCountry: getStatesOfCountry,
    getStateByCodeAndCountry: getStateByCodeAndCountry,
    getStateByCode: getStateByCode,
};
