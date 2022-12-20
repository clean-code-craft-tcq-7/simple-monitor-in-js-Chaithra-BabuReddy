import {
    minTemperature, minStateOfCharge, maxChargeRate, maxTemperature,
    maxStateOfCharge, minChargeRate
} from './batteryLimits.js';
import { printErrorMessageOnConsole } from "./printErrMssgOnConsole.js";
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const enJSON = require('./i18n/en.json'); //importing .json into ES Modules 
const deJson = require('./i18n/de.json');

var currentLanguage = 'de';
var translationObject = enJSON;
if (currentLanguage === 'de') {
    translationObject = deJson;
}

export function batteryIsOk(temperature, soc, charge_rate) {
    return isTemperatureOk(temperature) && isStateOfChargeOk(soc) && isChargeRateOk(charge_rate);
}

function isTemperatureOk(temperature) {
    return checkLimitsInRange(translationObject.tempOutOfRange, temperature, minTemperature, maxTemperature);
}
function isStateOfChargeOk(soc) {
    return checkLimitsInRange(translationObject.socOutOfRange, soc, minStateOfCharge, maxStateOfCharge);
}
function isChargeRateOk(charge_rate) {
    return checkLimitsInRange(translationObject.crOutOfRange, charge_rate, minChargeRate, maxChargeRate);
}

function checkLimitsInRange(errorMessage, value, minThreshold, maxThreshold) {
    if (value < minThreshold || value > maxThreshold) {
        printErrorMessageOnConsole(errorMessage);
        return false;
    }
    return true;
}



