import { minTemperature, minStateOfCharge, minChargeRate, maxTemperature, maxStateOfCharge } from './batteryLimits.js';

export function isTemperatureOk(temperature) {
    if (temperature < minTemperature || temperature > maxTemperature) {
        return false;
    }
    return true;
}
export function isStateOfChargeOk(soc) {
    if (soc < minStateOfCharge || soc > maxStateOfCharge) {
        return false;
    }
    return true;
}
export function isChargeRateOk(charge_rate) {
    if (charge_rate > minChargeRate) {
        return false;
    } 
        return true;
}