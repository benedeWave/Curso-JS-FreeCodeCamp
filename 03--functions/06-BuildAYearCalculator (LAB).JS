let year = 2024
let result = isLeapYear(year)
function isLeapYear(year){
  if (year % 4 === 0 && year % 100 > 0)
  return result = year + " is a leap year."
  if (year % 4 === 0 && year % 100)
  return result = year + " is not a leap year." 
  if (year % 4 === 0 && year % 400 === 0)
  return result = year + " is a leap year."
  else {
    return result = year + " is not a leap year."
  }
}
console.log(result)