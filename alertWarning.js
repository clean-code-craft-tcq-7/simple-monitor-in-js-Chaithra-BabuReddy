export function alertWarning_If_Limits_In_Upper_TLR_Range(value, minLimit, maxLimit) {
    if (value.inRange(minLimit, maxLimit)) {
        console.log("Warning: Approaching charge - peak");
    }
}

export function alertWarning_If_Limits_In_Lower_TLR_Range(value, minLimit, maxLimit) {
    if (value.inRange(minLimit, maxLimit)) {
        console.log("Warning: Approaching discharge");
    }
}

Number.prototype.inRange = function (min, max) {
    return this >= min && this <= max;
};
