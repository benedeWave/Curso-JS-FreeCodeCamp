let fortune1 = "Your cat will look very cuddly today."; // Primer paso asignamos todas las posibles respuestas del bot (usamos las de fabrica del ejercicio)
let fortune2 = "The weather will be nice tomorrow.";
let fortune3 = "Be cautious of your new neighbors.";
let fortune4 = "You will find a new hobby soon.";
let fortune5 = "It would be wise to avoid the color red today.";

let max = 5; // asignamos dos variables para poder generar un numero aleatorio que este en el rango del numero de opciones en este caso 5
let min = 1;

let randomNumber = Math.floor(Math.random() * max) + min; // creamos un numero aleatorio y lo redondeamos con el comando Math.Floor aunque yo quise primero hacerlo con el comando Math.round al parecer el curso pide especificamente el Math.Floor, debido a que auqneu round parezca mas logico, resulta que si hacemos la cuenta no daria la misma probabilidad a todos los resultados, una locura no?

let selectedFortune; // creamos al variable de la fortuna que mostraremos al final y la dejamos vacia pues el operador (if) no puede estar contenido dentro de una variable, tenemos que usarlo y que est ase defina luego.
if (randomNumber == 1) {selectedFortune = fortune1} else if (randomNumber == 2) {selectedFortune = fortune2} else if (randomNumber == 3) {selectedFortune = fortune3} else if (randomNumber == 4) {selectedFortune = fortune4} else if (randomNumber == 5) {selectedFortune = fortune5};
console.log(selectedFortune) // aca muy importante usar los operadores correctos al principio estaba usando el "=" para señalar la igualdad entre el numero aleatorio y la seleccion aca es importnate usar el == o incluso el === puesto que esto es como lo que le manda la "pregunta" al codigo y genera una respuesta, no solo es comparar hay que Preguntar.
