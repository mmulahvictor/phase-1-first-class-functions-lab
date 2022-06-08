// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}
function returnLastTwoDrivers(drivers){
    return drivers.slice(-2);
}
let selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers]
let createFareMultiplier = multiplier => {
    return value => {
        return multiplier * value;
    }
}
let fareDoubler = createFareMultiplier(2);
let fareTripler = createFareMultiplier(3);

let selectDifferentDrivers = (drivers, returnDrivers) => {
    return returnDrivers(drivers);
}