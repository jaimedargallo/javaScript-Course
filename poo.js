// PROGRAMACION ORIENTADA A OBJETOS

//CLASES 
// Son funciones, llamadas constructoras. Comienzan con Mayuscula

//CLASES DE JAVASCRIPT
var texto = new String('Hola, soy un texto');
console.log(texto);

var numero = new Number(5);

var boleano = new Boolean(true);

// CLASES DE JAVASCRIPT COMPUESTAS

var arreglos = new Array('Homer','Marge','Bart','Lisa','Maggie');


// CLASES PERSONALIZADAS

function Persona(){
	
	this.nombre = nombre;
	this.edad = edad;

}

// var persona1 = new Persona();
// persona1.nombre = 'Homer';
// persona1.edad = 38;

// console.log(persona1);

// var persona2 = new Persona();
// persona2.nombre = 'Marge';
// persona1.edad = 34;

// console.log(persona2);

var person1 = new Persona('Pedro', 16);
console.log(persona1);



//OBJETOS
