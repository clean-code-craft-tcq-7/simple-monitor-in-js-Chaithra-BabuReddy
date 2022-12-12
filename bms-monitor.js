import { expect } from 'chai';
import { isTemperatureOk, isStateOfChargeOk, isChargeRateOk } from './batteryStateValidation.js';

function batteryIsOk(temperature, soc, charge_rate) {
    if (evaluateBatteryState(temperature, soc, charge_rate)) {
        return true;
    }
    return false;
}
function evaluateBatteryState(temp, soc, chargeRate) {
    return isTemperatureOk(temp) && isStateOfChargeOk(soc) && isChargeRateOk(chargeRate);
}

expect(batteryIsOk(25, 70, 0.7)).to.be.true;
expect(batteryIsOk(50, 85, 0)).to.be.false;

