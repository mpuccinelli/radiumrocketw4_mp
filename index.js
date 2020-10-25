/* 1.a) Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la
suma de ambos números en una 3er variable. */

var num1 = 10;
var num2 = 15;
var add = num1+num2;
//console.log(add);

/* 1.b) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er
variable. */

var string1 = 'Hello';
var string2 = ' World';
var hw = string1+string2;
//console.log(hw);

/* 1.c) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras
del string) guardando el resultado la suma una 3er variable (utilizar length). */

var stringA = 'Mauricio';
var stringB = 'Puccinelli';
var totalLength = stringA.length + stringB.length;
//console.log(totalLength);

/* 2.a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto
en mayúscula (utilizar toUpperCase). */

var original= 'Radium Rocket';
var transformed = original.toUpperCase();
console.log(transformed);

/* 2.b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar
substring). */

var long = 'Whatever people say I am that is what I am not'
var short5 = long.substring(0,5);
console.log(short5);

/* 2.c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar
substring). */

var short3 = long.substring(long.length-3,long.length);
console.log(short3);

/* 2.d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en
una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +). */

var stringNotOk = 'stRiNg WrOnGlY wRiTtEn';
var stringOk = stringNotOk.substring(0,1).toUpperCase() + stringNotOk.substring(1,stringNotOk.length).toLowerCase();
console.log(stringOk);

/* 2.e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar
indexOf). */

var phrase = 'Index of first space';
var spaceIndex = phrase.indexOf(' ');
console.log(spaceIndex);

/* 2.f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún
espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un
nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás
letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el
operador +). */

var longWords = 'winGArdIuM lEVIosa'
var space = longWords.indexOf(' ');
var longWordsOk = longWords.substring(0,1).toUpperCase() + longWords.substring(1,space).toLowerCase() + ' ' + longWords.substring(space+1,space+2).toUpperCase() + longWords.substring(space+2,longWords.length).toLowerCase();
console.log(longWordsOk);