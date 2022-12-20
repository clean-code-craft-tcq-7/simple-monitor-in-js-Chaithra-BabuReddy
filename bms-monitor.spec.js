import { expect } from 'chai';
import { batteryIsOk } from './bms-monitor.js';

expect(batteryIsOk(25, 70, 0.7)).to.be.true;
expect(batteryIsOk(50, 85, 0)).to.be.false; //temperature out of range
expect(batteryIsOk(44, 86, 0.4)).to.be.false; //soc out of range
expect(batteryIsOk(44, 75, 1)).to.be.false; //cr out of range