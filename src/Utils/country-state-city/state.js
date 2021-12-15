"use strict";
const getAllData = require("../API/API").getAllData;
// var __importDefault = (this && this.__importDefault) || function (mod) {
//     return (mod && mod.__esModule) ? mod : { "default": mod };
// };
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStateByCode = exports.getStateByCodeAndCountry = exports.getStatesOfCountry = exports.getAllStates = void 0;
// var state_json_1 = __importDefault(require("./state.json"));
var utils_1 = require("./utils");
// Get a list of all states.
async function getAllStates() {
    var response = await getAllData(`ads/cars/all-states`);    
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
    // eslint-disable-next-line no-console
    console.warn("WARNING! 'getStateByCode' has been deprecated, please use the new 'getStateByCodeAndCountry' function instead!");
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
