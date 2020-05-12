var nuevoParrafo = document.createElement('p');

var nuevoTexto = document.createTextNode('Hola, soy un nuevo texto');

nuevoParrafo.appendChild(nuevoTexto);

nuevoParrafo.setAttribute('class', 'texto');

//----------------------------------------------------------

var parrafos = document.getElementsByClassName('texto');

var padreParrafos = parrafos[0].parentNode;

// Reemplazando un elemento

padreParrafos.replaceChild(nuevoParrafo, parrafos[1]);

// Eliminado un elemento

padreParrafos.removeChild(2);