let investment;
let rate;
let years;

investment = parseInt(prompt("Enter the investment amount"));
rate = parseInt(prompt("Enter the rate of interest"));
years = parseInt(prompt("Enter the years"));

let isValidYears = (years >= 1 && years <= 30) ? 1 : 0;


