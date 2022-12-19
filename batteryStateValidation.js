import { minTemperature, minStateOfCharge, maxChargeRate, maxTemperature, maxStateOfCharge } from './batteryLimits.js';

export function isTemperatureOk(temperature) {
    return checkLimitsInRange(temperature, minTemperature, maxTemperature);
}
export function isStateOfChargeOk(soc) {
    return checkLimitsInRange(soc, minStateOfCharge, maxStateOfCharge);
}
export function isChargeRateOk(charge_rate) {
    return checkLimitsInRange(charge_rate, 0, maxChargeRate);
}

function checkLimitsInRange(value, minThreshold, maxThreshold) {
    if (value < minThreshold || value > maxThreshold) {
        return false;
    }
    return true;
}
