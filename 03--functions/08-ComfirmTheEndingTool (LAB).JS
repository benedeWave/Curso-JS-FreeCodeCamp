function confirmEnding(cuerda1, cuerda2){
  let endPhrase = cuerda1.length - cuerda2.length
    if(cuerda1.slice(endPhrase) === cuerda2) {
    return true}
    else {
      return false
    }
    }