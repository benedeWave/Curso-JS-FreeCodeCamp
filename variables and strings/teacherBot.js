console.log("Hi there!");

const botName = "teacherBot";

const greeting = `My name is ${botName}.`;
console.log(greeting); // aca estoy usando la funcion template literals que es mucho mas comoda para trabajar con strings, pues tienen un lenguaje mucho mas natural.

const subject = "JavaScript";
const topic = "strings";

const sentence = `Today, you will learn about ${topic} in ${subject}.`;
console.log(sentence);

const strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
console.log(strLengthIntro);

console.log(subject.length); // aca usamos el comando .length para obtener el valor del largo de la variable "subject".

console.log(`Here is an example of using the length property on the word ${topic}.`);
console.log(topic.length); // aca lo mismo pero con "topic"

console.log(`Here is an example of accessing the first letter in the word ${subject}.`);

console.log(subject[0]); // aca usamos el metodo [] para acceder a la primera letra de la variable "subject"

console.log(`Here is an example of accessing the second letter in the word ${subject}.`);
console.log(subject[1]);

console.log(`Here is an example of accessing the last letter in the word ${subject}.`);

const lastCharacter = subject[subject.length - 1]; // esta es la forma de acceder al ultimo caracter de una variable
console.log(lastCharacter); 

const learningIsFunSentence = "Learning is fun.";

console.log("Here are examples of finding the positions of substrings in the sentence.");

console.log(learningIsFunSentence.indexOf("Learning")); // este es mi primer uso del comando indexOf() esto me ayuda a conseguir la posicion de un substring dentro de un string.

console.log(learningIsFunSentence.indexOf("fun"));
console.log(learningIsFunSentence.indexOf("learning"));

console.log("I hope you enjoyed learning today.");