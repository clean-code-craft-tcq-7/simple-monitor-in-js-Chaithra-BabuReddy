
import { isTemperatureOk, isStateOfChargeOk, isChargeRateOk } from './batteryStateValidation.js';

export function batteryIsOk(temperature, soc, charge_rate) {
    return isTemperatureOk(temperature) && isStateOfChargeOk(soc) && isChargeRateOk(charge_rate);
}



