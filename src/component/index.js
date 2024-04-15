// Create a new Date object for April 10
var date = new Date('April 10, 2024');

// Add 10 days to the date
date.setDate(date.getDate() + 10);

// Output the new date
console.log("Date 10 days after April 10: " + date.toLocaleDateString());
