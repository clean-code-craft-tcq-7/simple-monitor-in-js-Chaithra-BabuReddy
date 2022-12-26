import {
    minTempThreshold, minSocThreshold, maxChargeRateThreshold, maxTempThreshold,
    maxSocThreshold, minChargeRateThreshold, minSoc_tolernaceLimit, maxSoc_ToleranceLimit
} from './batteryLimits.js';
import { printErrorMessageOnConsole } from "./printErrMssgOnConsole.js";
import { alertWarning_If_Limits_In_Lower_TLR_Range, alertWarning_If_Limits_In_Upper_TLR_Range } from "./alertWarning.js"

import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const enJSON = require('./i18n/en.json'); //importing .json into ES Modules 
const deJson = require('./i18n/de.json');

var currentLanguage = 'en'; // variable changes when user changes language settings from UI. default english is choosen.
var translationObject = enJSON;
if (currentLanguage === 'de') {
    translationObject = deJson;
}

export function batteryIsOk(temperature, soc, charge_rate) {
    return isTemperatureOk(temperature) && isStateOfChargeOk(soc) && isChargeRateOk(charge_rate);
}

function isTemperatureOk(temperature) {
    return isLimitsWithinThreshold(translationObject.tempOutOfRange, temperature, minTempThreshold, maxTempThreshold);
}

function isStateOfChargeOk(soc) {
    alertWarning_If_Limits_In_Lower_TLR_Range(soc, minSocThreshold, minSoc_tolernaceLimit);
    alertWarning_If_Limits_In_Upper_TLR_Range(soc, maxSoc_ToleranceLimit, maxSocThreshold);
    return isLimitsWithinThreshold(translationObject.socOutOfRange, soc, minSocThreshold, maxSocThreshold);
}

function isChargeRateOk(charge_rate) {
    return isLimitsWithinThreshold(translationObject.crOutOfRange, charge_rate, minChargeRateThreshold, maxChargeRateThreshold);
}

function isLimitsWithinThreshold(errorMessage, value, minThreshold, maxThreshold) {
    if (value < minThreshold || value > maxThreshold) {
        printErrorMessageOnConsole(errorMessage);
        return false;
    }
    return true;
}



