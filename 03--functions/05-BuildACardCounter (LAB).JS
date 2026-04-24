let count = 0;
function cardCounter(card){
     
  if (card <= 6 && card >=2) //aca olivdaba mucho que el if siempre va encerrado en parentesis
    {    count = count + 1
  }
   
   else if (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A") {
    count = count - 1
  }
    
    if (count > 0) {
    return count + " " + "Bet"
  }
  else {
    return count + " " + "Hold"
  }
}
