var moment = require('moment');


// Jan 1st 1970  00:00:00 am
//
// var date = new Date();
// var months = ['Jan','Feb']
// console.log(date.getMonth());

// var date = moment();
// date.add(100, 'years').subtract(9,'months');
// console.log(date.format('MMM Do YYYY'));
var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var time = moment();
time.subtract(4,'hours').subtract(34,'minutes');
console.log(time.format('h:mm a'));
