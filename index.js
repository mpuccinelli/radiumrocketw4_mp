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
//console.log(transformed);

/* 2.b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar
substring). */

var long = 'Whatever people say I am that is what I am not'
var short5 = long.substring(0,5);
//console.log(short5);

/* 2.c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar
substring). */

var short3 = long.substring(long.length-3,long.length);
//console.log(short3);

/* 2.d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en
una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +). */

var stringNotOk = 'stRiNg WrOnGlY wRiTtEn';
var stringOk = stringNotOk.substring(0,1).toUpperCase() + stringNotOk.substring(1,stringNotOk.length).toLowerCase();
//console.log(stringOk);

/* 2.e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar
indexOf). */

var phrase = 'Index of first space';
var spaceIndex = phrase.indexOf(' ');
//console.log(spaceIndex);

/* 2.f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún
espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un
nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás
letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el
operador +). */

var longWords = 'winGArdIuM lEVIosa'
var space = longWords.indexOf(' ');
var longWordsOk = longWords.substring(0,1).toUpperCase() + longWords.substring(1,space).toLowerCase() + ' ' + longWords.substring(space+1,space+2).toUpperCase() + longWords.substring(space+2,longWords.length).toLowerCase();
//console.log(longWordsOk);

/* 3.a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por
consola los meses 5 y 11 (utilizar console.log) */

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var months2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
//console.log(months[4],months[10]);

/* 3.b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). */

var months = months.sort();
//console.log(months);

/* 3.c) Agregar un elemento al principio y al final del array (utilizar unshift y push) */

months.unshift('First Month');
months.push('Ending Month');
//console.log(months);

/* 3.d) Quitar un elemento del principio y del final del array (utilizar shift y pop) */

months.shift();
months.pop();
//console.log(months);

/* 3.e) Invertir el orden del array (utilizar reverse)*/

months.reverse();
//console.log(months);


/* 3.f) Unir todos los elementos del array en un único string donde cada mes este separado
por un guión - (utilizar join). */

var monthsOneWord = months.join('-');
//console.log(monthsOneWord);

/* 3.g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre
(utilizar slice). */

var monthsMayNov = months2.slice(4,11);
//console.log(monthsMayNov);


/* 4.a) Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es
mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un
alerta con el mensaje “Lower than 0,5” */

var r = Math.random();

if (r >= 0.5) {
    console.log('Greater than 0.5')
} else {
    console.log('Lower than 0.5')
}

/* 4.b) Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los
siguientes mensajes de alerta:
i) “Bebe” si la edad es menor a 2 años
ii) “Nino” si la edad es entre 2 y 12 años
iii) “Adolecente” si la edad es entre 13 y 19 años
iv) “Joven” si la edad está entre 20 y 30 años
v) “Adulto” entre 31 y 60 años
vi) “Adulto mayor” entre 61 y 75 años
vii) “Anciano” si es mayor a 75 años */

var age = 1;

if (age<2){
    console.log('Bebe')
} else if (age>=2 && age<=12){
    console.log('Nino')
} else if (age>12 && age<=19){
    console.log('Adolescente')
} else if (age>19 && age<=30){
    console.log('Joven')
} else if (age>30 && age<=60){
    console.log('Adulto')
} else if (age>60 && age<=75){
    console.log('Adulto mayor')
} else if (age>75){
    console.log('Anciano')
}






