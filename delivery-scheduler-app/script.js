const firstDay = "Monday";
const secondDay = "Friday";
console.log("Available days: " + firstDay + "and" + secondDay);
const deliveryDay = "Friday";
console.log("Delivery Day: " + secondDay);
const firstDayCheck = deliveryDay === firstDay;
console.log("Successful delivery on the first day? " + firstDayCheck);
const secondDayCheck = deliveryDay === secondDay;
console.log("Successful delivery on second day? " + secondDayCheck);
const dayResult = firstDayCheck || secondDayCheck;
console.log("Filfilled Sheila's day preference? " + dayResult);
const requestAfterTime = 8;
const requestBeforeTime = 10;
console.log("Request delivery after " + requestAfterTime + " but before " + requestBeforeTime);
const deliveryTime = 9;
console.log("Delivery Time: " + deliveryTime);
const afterTimeCheck = deliveryTime >= requestAfterTime;
console.log( "Delivery is after " + requestAfterTime + "?" + afterTimeCheck);
const beforeTimeCheck = deliveryTime < requestBeforeTime;
console.log("Delivery is before " + requestBeforeTime + "? " + beforeTimeCheck);
const timeResult = beforeTimeCheck && afterTimeCheck;
console.log("Fulfilled Sheila's time prefernce? " + timeResult);
const overallCheck = timeResult && dayResult;
console.log("Program scheduled well? " + overallCheck); 