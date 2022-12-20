import {
    minTemperature, minStateOfCharge, maxChargeRate, maxTemperature,
    maxStateOfCharge, minChargeRate, tempLimitId, socLimitId, crLimitId
} from './batteryLimits.js';
import { printErrorMessageOnConsole } from "./printErrMssgOnConsole.js";

export function batteryIsOk(temperature, soc, charge_rate) {
    return isTemperatureOk(temperature) && isStateOfChargeOk(soc) && isChargeRateOk(charge_rate);
}

function isTemperatureOk(temperature) {
    return checkLimitsInRange(tempLimitId, temperature, minTemperature, maxTemperature);
}
function isStateOfChargeOk(soc) {
    return checkLimitsInRange(socLimitId, soc, minStateOfCharge, maxStateOfCharge);
}
function isChargeRateOk(charge_rate) {
    return checkLimitsInRange(crLimitId, charge_rate, minChargeRate, maxChargeRate);
}

function checkLimitsInRange(bmsMonitoringItem, value, minThreshold, maxThreshold) {
    if (value < minThreshold || value > maxThreshold) {
        printErrorMessageOnConsole(bmsMonitoringItem);
        return false;
    }
    return true;
}



