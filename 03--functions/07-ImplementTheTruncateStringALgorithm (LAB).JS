let string = "A-tisket a-tasket A green and yellow basket"
let num = 8

function truncateString (string, num){
  if(string.length > num)
  return string.slice(0, num) + "..."
  else {
    return string 
  }
}