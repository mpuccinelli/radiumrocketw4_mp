/* 1.a) Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la
suma de ambos números en una 3er variable. */

var num1 = 10;
var num2 = 15;
var add = num1+num2;
console.log(add);

/* 1.b) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er
variable. */

var string1 = 'Hello';
var string2 = ' World';
var hw = string1+string2;
console.log(hw);

/* 1.c) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras
del string) guardando el resultado la suma una 3er variable (utilizar length). */

var stringA = 'Mauricio';
var stringB = 'Puccinelli';
var totalLength = stringA.length + stringB.length;
console.log(totalLength);

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

/* 3.a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por
consola los meses 5 y 11 (utilizar console.log) */

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var months2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(months[4],months[10]);

/* 3.b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). */

var months = months.sort();
console.log(months);

/* 3.c) Agregar un elemento al principio y al final del array (utilizar unshift y push) */

months.unshift('First Month');
months.push('Ending Month');
console.log(months);

/* 3.d) Quitar un elemento del principio y del final del array (utilizar shift y pop) */

months.shift();
months.pop();
console.log(months);

/* 3.e) Invertir el orden del array (utilizar reverse)*/

months.reverse();
console.log(months);


/* 3.f) Unir todos los elementos del array en un único string donde cada mes este separado
por un guión - (utilizar join). */

var monthsOneWord = months.join('-');
console.log(monthsOneWord);

/* 3.g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre
(utilizar slice). */

var monthsMayNov = months2.slice(4,11);
console.log(monthsMayNov);


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

/* 5.a) Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de
JavaScript para mostrar una alerta utilizando cada una de las palabras. */

var words= ['mauricio', 'mariana', 'alexis', 'agustin', 'rodrigo'];

for (var i=0;i<words.length;i++){
    alert(words[i]);
}

/* 5.b) Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una
alerta por cada palabra modificada. */

for (var i=0;i<words.length;i++){
    words[i] = words[i].substring(0,1).toUpperCase()+words[i].substring(1,words[i].length);
    alert(words[i]);
}

/* 5.c) Crear una variable llamada “sentence” que tenga un string vacío, luego al array del
punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la
variable sentence. Al final mostrar una única alerta con la cadena completa. */

var sentence ='';

for (var i=0;i<words.length;i++){
    sentence = sentence + words[i] + ' ';
}

alert(sentence);

/* 5.d) Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el
número de la repetición, es decir que al final de la ejecución del bucle for deberia
haber 10 elementos dentro del array, desde el número 0 hasta al numero 9. Mostrar
por la consola del navegador el al array final (utilizar console.log). */

var empty = [];

for (var i=0;i<10;i++){
    empty[i] = i;
}
console.log(empty);


/* 6.a) Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha
variable en la consola del navegador. */
/* 6.b)  A la función suma anterior, agregarle una validación para controlar si alguno de los
parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros
tiene error y retornar el valor NaN como resultado. */


function addition(n1,n2){
    if (isNaN(n1)==true || isNaN(n2)==true){
        sum = NaN;
        alert('One of the parameters is not a number');
    }else{
        sum = n1 + n2;
    }
    return sum;
}

console.log(addition(10,'a'));

/* 6.c) Crear una función validate integer que reciba un número como parámetro y verdadero
si es un número entero. */

function validateInteger(x){
    if (Number.isInteger(x)==true){
        return 'Verdadero';
    }else{
        return 'Falso'
    }
}

console.log(validateInteger(10));

/* 6.d) A la función suma del ejercicio 6b) agregarle una llamada que valide que los números
sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el
número convertido a entero (redondeado). */

function additionD(n1,n2){
    if (isNaN(n1)==true || isNaN(n2)==true){
        sum = NaN;
        alert('One of the parameters is not a number');
    }else{
        if(validateInteger(n1)=='Falso'){
            n1 = Math.round(n1);
            alert('First number is not an integer');
            console.log(n1);
        }
        if(validateInteger(n2)=='Falso'){
            n2 = Math.round(n2);
            alert('Second number is not an integer');
            console.log(n2);
        }
        sum = n1 + n2;
    }
    return sum;
}

console.log(additionD(10.5,3.25));

/* 6.e) Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la
función suma probando que todo siga funcionando igual */

function roundNumber(m){
    if(validateInteger(m)=='Falso'){
        m = Math.round(m);
        alert('Number is not an integer');
        console.log(m);
    }
    return m;
}


function additionE(n1,n2){
    if (isNaN(n1)==true || isNaN(n2)==true){
        sum = NaN;
        alert('One of the parameters is not a number');
    }else{
        n1 = roundNumber(n1);
        n2 = roundNumber(n2);        
        sum = n1 + n2;
    }
    return sum;
}

console.log(additionE(10.5,3.25));

