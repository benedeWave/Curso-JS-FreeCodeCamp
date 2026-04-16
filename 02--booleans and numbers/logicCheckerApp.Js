const hasDeveloperJob = true; // esta variable la vamos cambiando para ver como interactua el operador con relacion a los resultados en la consola 

if (hasDeveloperJob) {
  console.log("Timmy is employed as a developer.");
}

const isTimmyAGamer = false; //aca vemos que la consola no arroja ningun resultado, porque no colocamos el statement else en el codigo

if (isTimmyAGamer) {
  console.log("Timmy loves to play World of Warcraft.");
}

const timmyAge = 15; // aca si completamos el condicional y fuimos cambiando valores para ver lo que nos arrojaba la consola, en este caso colocamos los dos condicionales y todo piola.

if (timmyAge >= 16) {
  console.log("Timmy is old enough to drive.");
} else {
  console.log("Timmy is not old enough to drive.");
}
