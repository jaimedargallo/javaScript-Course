var nuevoParrafo = document.createElement('p');

var textoNuevo = document.createTextNode('Hola, soy un texto nuevo');

nuevoParrafo.appendChild(textoNuevo);

nuevoParrafo.setAttibute('class', 'texto');

// var contenedor = document.getElementByClassName('contenedor')[0];





// Seleccionar el elemento padre de un elemento

var primerParrafo = document.getElementsByClassName('texto')[0];

var padreParrafos = primerParrafo.parentNode;

padreParrafos.className = 'contenedor';

var parrafos = document.getElementsByClassName('texto');

padreParrafos.insertBefore(nuevoParrafo, primerParrafo)[1];
